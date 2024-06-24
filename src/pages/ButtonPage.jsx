import Button from "../components/Button"
import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { GoChevronRight } from "react-icons/go"
import { GoChevronLeft } from "react-icons/go"

const ButtonPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex space-x-2">
        <Button btnType="primary">Primary</Button>
        <Button btnType="success">Success</Button>
        <Button btnType="danger">Danger</Button>
        <Button btnType="outline">Outline</Button>
      </div>
      <div className="flex flex-col space-y-2">
        <Button btnType="primary" size="small">
          Primary
        </Button>
        <Button btnType="success" size="medium">
          Success
        </Button>
        <Button btnType="danger" size="large">
          Danger
        </Button>
        <Button btnType="outline" size="full">
          Outline
        </Button>
      </div>

      <h3>İcon Butonlar</h3>

      <div className="flex flex-col items-start gap-y-2 border border-black-two p-2 rounded">

        <div className="w-full flex items-start space-x-2 border border-black-two p-2 rounded">
          <Button btnType="primary" size="circle-sm">
            <BiEditAlt />
          </Button>
          <Button btnType="danger" size="circle-md">
            <BiEditAlt />
          </Button>
          <Button btnType="outline" size="circle-lg">
            <BiEditAlt />
          </Button>
          <h4 className="w-full font-bold self-center text-right">size=circle-sm/md/lg</h4>
        </div>

        <div className="flex w-full border border-black-two p-2 rounded">
          <Button btnType="primary" size="square">
            <GoChevronRight />
          </Button>
          <h4 className="w-full font-bold text-right">size=square</h4>
        </div>

        <div className="w-full border border-black-two p-2 rounded flex items-start space-x-2">
          <Button btnType="primary" size="square-sm">
            <GoChevronRight />
          </Button>
          <Button btnType="danger" size="square-md">
            <GoChevronRight />
          </Button>
          <Button btnType="outline" size="square-lg">
            <GoChevronLeft />
          </Button>

          <h4 className="w-full self-center font-bold text-right">size=square-sm/md/lg</h4>
        </div>
        <div className="w-full flex items-start space-x-2 border border-black-two p-2 rounded">
          <Button btnType="primary" size="upright-sm">
            <GoChevronRight />
          </Button>
          <Button btnType="danger" size="upright-md">
            <GoChevronRight />
          </Button>
          <Button btnType="outline" size="upright-lg">
            <GoChevronLeft />
          </Button>

          <h4 className="w-full self-center font-bold text-right">size=upright-sm/md/lg</h4>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
