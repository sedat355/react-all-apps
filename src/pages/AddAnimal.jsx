import { useState } from 'react'
import bird from '../assets/svg/bird.svg'
import cat from '../assets/svg/cat.svg'
import cow from '../assets/svg/cow.svg'
import dog from '../assets/svg/dog.svg'
import gator from '../assets/svg/gator.svg'
import horse from '../assets/svg/horse.svg'
import Button from '../components/Button'

const animalsArray = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

const animalsObject = {
  bird, cat, cow, dog, gator, horse
}

const getRandomAnimal = (arr) => {
  const randomIndex = Math.floor(Math.random() * (arr.length));
  return arr[randomIndex]
}

getRandomAnimal(animalsArray)

const AddAnimal = () => {
  const [ animals, setAnimals ] = useState([]);
  
  const addAnimal = () => {
    const animal = getRandomAnimal(animalsArray)
    setAnimals([...animals, animal])
  }

  console.log(animals)

  return (
    <div>
      <Button 
        btnType="outline"
        handleClick={addAnimal}
      >
        Add Animal
      </Button>

      <ul className='flex mt-8'>
        <li>
          <img className='w-20 h-20' src={animalsObject[getRandomAnimal(animalsArray)]} alt="bird" />
        </li>
      </ul>
    </div>
  )
}

export default AddAnimal