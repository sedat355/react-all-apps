import { useReducer, useRef } from "react"
import Button from "../components/Button"

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_INPUT_VAL: "ADD_INPUT_VAL",
  CHANGE_INPUT: "CHANGE_INPUT",
}

const counterReducer = (counter, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...counter, count: counter.count + 1 }
    case ACTIONS.DECREMENT:
      return { ...counter, count: counter.count - 1 }
    case ACTIONS.CHANGE_INPUT:
      return { ...counter, inputVal: action.payload }
    case ACTIONS.ADD_INPUT_VAL:
      return {
        ...counter,
        count: counter.count + counter.inputVal,
        inputVal: "",
      }
    default:
      throw Error("Olay tanımlanamadı!!")
  }
}

const initialState = {
  count: 0,
  inputVal: 0,
}

const CounterPage = () => {
  const [counter, dispatch] = useReducer(counterReducer, initialState)
  const inputRef = useRef()

  console.log(counter)

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  function handleAddClick(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_INPUT_VAL })
    inputRef.current.focus()
  }

  function handleChange(e) {
    const value = Number(e.target.value)
    dispatch({ type: ACTIONS.CHANGE_INPUT, payload: value })
  }

  return (
    <div>
      <span className="text-xl">
        Count: <strong className="text-2xl">{counter.count}</strong>
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
          ref={inputRef}
          type="number"
          value={counter.inputVal || ""}
          onChange={handleChange}
          className="border border-black-one rounded py-1 px-2"
        />
        <Button
          type="submit"
          handleClick={handleAddClick}
          className=""
          btnType="outline"
        >
          Add it
        </Button>
      </form>
    </div>
  )
}

export default CounterPage
