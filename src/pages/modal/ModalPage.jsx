import { useState } from "react"
import Button from "../../components/Button"
import Modal from "./Modal"

const ModalPage = () => {
  const [ isOpenModal, setIsOpenModal ] = useState(false)

  const handleClick = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <div className="modalpage">
      <Button handleClick={handleClick}>Open Modal</Button>

      {isOpenModal && <Modal/>}
    </div>
  )
}

export default ModalPage