import Button from "../../components/Button"
import ReactDOM from 'react-dom'

const Modal = ({ setIsOpenModal }) => {
  const handleClick = () => {
    setIsOpenModal(false)
  }

  const handleOverlayClick = () => {
    setIsOpenModal(false)
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal rounded-md w-96 h-60 bg-gray-one text-black-two p-4 flex fixed z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <p className="self-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          possimus officiis vero deleniti quos distinctio ipsa cupiditate rem
          dolores voluptates! Voluptate quaerat possimus dolore enim blanditiis
          ipsam quos perspiciatis error?
        </p>

        <Button
          handleClick={handleClick}
          btnType="danger"
          className="self-end whitespace-nowrap"
        >
          I accept
        </Button>
      </div>

      <div
        onClick={handleOverlayClick}
        className="overlay bg-black opacity-60 absolute inset-0"
      ></div>
    </>,
    document.querySelector('.modal-container')
  )
}

export default Modal
