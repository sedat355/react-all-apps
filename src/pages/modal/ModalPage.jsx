import { useState } from "react"
import Button from "../../components/Button"
import Modal from "./Modal"

const ModalPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const modalContent = (
    <>
      <p className="self-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          possimus officiis vero deleniti quos distinctio ipsa cupiditate rem
          dolores voluptates! Voluptate quaerat possimus dolore enim blanditiis
          ipsam quos perspiciatis error?
        </p>

        <Button
          handleClick={handleCloseModal}
          btnType="danger"
          className="self-end whitespace-nowrap"
        >
          I accept
        </Button>
    </>
  )

  return (
    <div className="modalpage">
      <Button btnType="primary" handleClick={handleOpenModal}>
        Open Modal
      </Button>

      {isOpenModal && <Modal handleCloseModal={handleCloseModal} modalContent={modalContent} setIsOpenModal={setIsOpenModal} />}
    </div>
  )
}

export default ModalPage
