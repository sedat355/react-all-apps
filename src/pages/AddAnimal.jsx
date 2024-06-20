import { useState } from 'react'
import Button from '../components/Button'
import Animal from './Animal'

const animalsArray = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

const getRandomAnimal = (arr) => {
  const randomIndex = Math.floor(Math.random() * (arr.length));
  return arr[randomIndex]
}

const AddAnimal = () => {
  const [ animals, setAnimals ] = useState([]);

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

  const renderedAnimals = animals.map( (animal, index) => {
    return(
     <Animal key={index} animal={animal}/>
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