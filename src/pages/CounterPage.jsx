import { useReducer } from "react"
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
      return { ...counter, count: counter.count + Number(action.payload) }
    default:
      throw Error("Olay tanımlanamadı!!")
  }
}

const initialState = {
  count: 0,
  inputVal: "",
}

const CounterPage = () => {
  const [counter, dispatch] = useReducer(counterReducer, initialState)

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  function handleAddClick() {
    dispatch({ type: ACTIONS.ADD_INPUT_VAL, payload: counter.inputVal })
    dispatch({ type: ACTIONS.CHANGE_INPUT, payload: "" })
  }

  function handleChange(e) {
    const value = e.target.value
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
          value={counter.inputVal}
          onChange={handleChange}
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
