import { useState } from "react"
import Button from "../components/Button"

const CounterPage = () => {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState("")

  return (
    <div>
      <span className="text-xl">
        Count: <strong className="text-2xl">{count}</strong>
      </span>

      <div className="flex gap-x-2 mt-2">
        <Button btnType="primary">Increment</Button>
        <Button btnType="danger">Decrement</Button>
      </div>

      <form className="flex gap-x-2 mt-4">
        <input className="border border-black-one rounded" />
        <Button className="" btnType="outline">
          Add it
        </Button>
      </form>
    </div>
  )
}

export default CounterPage
