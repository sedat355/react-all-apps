import Button from "../../components/Button"

const Modal = () => {
  return (
    <div className="rounded-md w-96 h-60 bg-gray-one p-4 flex absolute right-1/2 translate-x-1/2 translate-y-1/2">
      <p className="self-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, possimus officiis vero deleniti quos distinctio ipsa cupiditate rem dolores voluptates! Voluptate quaerat possimus dolore enim blanditiis ipsam quos perspiciatis error?</p>
      <Button btnType="danger" className="self-end whitespace-nowrap">I accept</Button>
    </div>
  )
}

export default Modal