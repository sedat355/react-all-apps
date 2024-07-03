import ReactDOM from 'react-dom'

const Modal = ({ modalContent, handleCloseModal }) => {

  return ReactDOM.createPortal(
    <>
      <div className="modal rounded-md w-96 h-60 bg-gray-one text-black-two p-4 flex fixed z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {modalContent}
      </div>

      <div
        onClick={handleCloseModal}
        className="overlay bg-black opacity-60 absolute inset-0"
      ></div>
    </>,
    document.querySelector('.modal-container')
  )
}

export default Modal
