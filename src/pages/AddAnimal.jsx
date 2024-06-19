import { useState } from 'react'
import bird from '../assets/svg/bird.svg'
import cat from '../assets/svg/cat.svg'
import cow from '../assets/svg/cow.svg'
import dog from '../assets/svg/dog.svg'
import gator from '../assets/svg/gator.svg'
import horse from '../assets/svg/horse.svg'
import Button from '../components/Button'

const animalsArray = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];


const getRandomAnimal = (arr) => {
  const randomIndex = Math.floor(Math.random() * (arr.length));
  return arr[randomIndex]
}

getRandomAnimal(animalsArray)

const animalsObject = {
  bird, cat, cow, dog, gator, horse
}

const AddAnimal = () => {
  const [ animals, setAnimals ] = useState([]);
  
  const addAnimal = () => {
    const animal = getRandomAnimal(animalsArray)
    setAnimals([...animals, animal])
  }

  const renderedAnimals = animals.map( (animal, index) => {
    return(
      <li className='border p-2 rounded border-black-one' key={index}>
        <img className='h-20 w-20' src={animalsObject[animal]} alt={animal} />
      </li>
    )
  })

  return (
    <div>
      <Button 
        btnType="outline"
        handleClick={addAnimal}
      >
        Add Animal
      </Button>

      <ul className='flex flex-wrap items-center justify-center gap-4 mt-8'>
        {renderedAnimals}
      </ul>
    </div>
  )
}

export default AddAnimal