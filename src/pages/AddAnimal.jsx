import { useState } from 'react'
import bird from '../assets/svg/bird.svg'
import cat from '../assets/svg/cat.svg'
import cow from '../assets/svg/cow.svg'
import dog from '../assets/svg/dog.svg'
import gator from '../assets/svg/gator.svg'
import horse from '../assets/svg/horse.svg'
import heart from '../assets/svg/heart.svg'
import Button from '../components/Button'

const animalsArray = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

const getRandomAnimal = (arr) => {
  const randomIndex = Math.floor(Math.random() * (arr.length));
  return arr[randomIndex]
}

const animalsObject = {
  bird, cat, cow, dog, gator, horse
}

const AddAnimal = () => {
  const [ animals, setAnimals ] = useState([]);
  const [ clicks, setClicks ] = useState(1)
  
  console.log(animals)

  const addAnimal = () => {
    const animal = getRandomAnimal(animalsArray)

    if(!animals.includes(animal)) {
      setAnimals([...animals, animal])
    } else if(animals.length !== animalsArray.length){
      addAnimal();
    } else {
      alert("Gösterilecek başka hayvan yok!!")
    }
  }

  const handleHeartClick = (e) => {
    console.log(e.target)
    setClicks(clicks + 1)
  }

  const renderedAnimals = animals.map( (animal, index) => {
    return(
      <li className='border p-2 rounded border-black-one' key={index}>
        <img className='h-20 w-20' src={animalsObject[animal]} alt={animal} />
        <img onClick={handleHeartClick} src={heart} alt="heart" className={`cursor-pointer`} style={{width: 10 + 2*clicks + 'px'}}/>
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