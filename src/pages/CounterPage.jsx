import { useState } from "react"
import Button from "../components/Button"

const CounterPage = () => {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState("")

  console.log(inputVal)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function handleAddClick() {
    setCount(count + Number(inputVal))
    setInputVal("")
  }

  return (
    <div>
      <span className="text-xl">
        Count: <strong className="text-2xl">{count}</strong>
      </span>

      <div className="flex gap-x-2 mt-2">
        <Button handleClick={increment} btnType="primary">
          Increment
        </Button>
        <Button handleClick={decrement} btnType="danger">
          Decrement
        </Button>
      </div>

      <form className="flex gap-x-2 mt-4">
        <input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          className="border border-black-one rounded py-1 px-2"
        />
        <Button handleClick={handleAddClick} className="" btnType="outline">
          Add it
        </Button>
      </form>
    </div>
  )
}

export default CounterPage
