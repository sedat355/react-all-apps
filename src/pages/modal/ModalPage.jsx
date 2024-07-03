import { useState } from "react"
import Button from "../../components/Button"
import Modal from "./Modal"

const ModalPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClick = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleOverlayClick = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="modalpage">
      <Button handleClick={handleClick}>Open Modal</Button>

      {isOpenModal && (
        <>
          <Modal setIsOpenModal={setIsOpenModal} />
          <div
            onClick={handleOverlayClick}
            className="overlay bg-black opacity-60 absolute inset-0"
          ></div>
        </>
      )}
    </div>
  )
}

export default ModalPage
