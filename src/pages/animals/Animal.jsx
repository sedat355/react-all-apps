import bird from '../../assets/svg/bird.svg'
import cat from '../../assets/svg/cat.svg'
import cow from '../../assets/svg/cow.svg'
import dog from '../../assets/svg/dog.svg'
import gator from '../../assets/svg/gator.svg'
import horse from '../../assets/svg/horse.svg'
import heart from '../../assets/svg/heart.svg'
import { useState } from 'react'

const animalsObject = {
  bird, cat, cow, dog, gator, horse
}

const Animal = ({animal}) => {
  const [ clicks, setClicks ] = useState(0)

  const handleHeartClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <li
      onClick={handleHeartClick}
      className="border p-2 rounded border-black-one relative cursor-pointer"
    >
      <img className="h-20 w-20" src={animalsObject[animal]} alt={animal} />
      <img
        src={heart}
        alt="heart"
        className={`absolute bottom-1 left-1`}
        style={{ width: 20 + 2 * clicks + "px" }}
      />
    </li>
  )
}

export default Animal
