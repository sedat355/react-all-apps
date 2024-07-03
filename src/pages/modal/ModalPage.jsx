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
    <div className="modalpage h-full">
      <Button btnType="primary" handleClick={handleOpenModal}>
        Open Modal
      </Button>

      {isOpenModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          modalContent={modalContent}
          setIsOpenModal={setIsOpenModal}
        />
      )}

      <div className="flex flex-col gap-y-8 mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit vitae
          earum id asperiores reiciendis error ipsam illo vero amet! Corrupti,
          quo magnam quia odit ullam accusantium ex non ipsam, id doloribus
          aliquid numquam nesciunt quas asperiores amet maiores veritatis
          dignissimos minus in! Qui suscipit, expedita veritatis reprehenderit
          tempore a recusandae. Blanditiis et, repellendus alias placeat optio
          nulla rerum minima porro voluptatibus consectetur quia ut animi
          cumque? Eius velit libero dicta laboriosam dolores repellendus sit
          unde cum nostrum sunt asperiores culpa incidunt cumque quia iure ex
          eum illum ab ad ducimus, quidem, distinctio quaerat minus ea!
          Quibusdam perspiciatis nesciunt consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit vitae
          earum id asperiores reiciendis error ipsam illo vero amet! Corrupti,
          quo magnam quia odit ullam accusantium ex non ipsam, id doloribus
          aliquid numquam nesciunt quas asperiores amet maiores veritatis
          dignissimos minus in! Qui suscipit, expedita veritatis reprehenderit
          tempore a recusandae. Blanditiis et, repellendus alias placeat optio
          nulla rerum minima porro voluptatibus consectetur quia ut animi
          cumque? Eius velit libero dicta laboriosam dolores repellendus sit
          unde cum nostrum sunt asperiores culpa incidunt cumque quia iure ex
          eum illum ab ad ducimus, quidem, distinctio quaerat minus ea!
          Quibusdam perspiciatis nesciunt consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit vitae
          earum id asperiores reiciendis error ipsam illo vero amet! Corrupti,
          quo magnam quia odit ullam accusantium ex non ipsam, id doloribus
          aliquid numquam nesciunt quas asperiores amet maiores veritatis
          dignissimos minus in! Qui suscipit, expedita veritatis reprehenderit
          tempore a recusandae. Blanditiis et, repellendus alias placeat optio
          nulla rerum minima porro voluptatibus consectetur quia ut animi
          cumque? Eius velit libero dicta laboriosam dolores repellendus sit
          unde cum nostrum sunt asperiores culpa incidunt cumque quia iure ex
          eum illum ab ad ducimus, quidem, distinctio quaerat minus ea!
          Quibusdam perspiciatis nesciunt consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit vitae
          earum id asperiores reiciendis error ipsam illo vero amet! Corrupti,
          quo magnam quia odit ullam accusantium ex non ipsam, id doloribus
          aliquid numquam nesciunt quas asperiores amet maiores veritatis
          dignissimos minus in! Qui suscipit, expedita veritatis reprehenderit
          tempore a recusandae. Blanditiis et, repellendus alias placeat optio
          nulla rerum minima porro voluptatibus consectetur quia ut animi
          cumque? Eius velit libero dicta laboriosam dolores repellendus sit
          unde cum nostrum sunt asperiores culpa incidunt cumque quia iure ex
          eum illum ab ad ducimus, quidem, distinctio quaerat minus ea!
          Quibusdam perspiciatis nesciunt consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit vitae
          earum id asperiores reiciendis error ipsam illo vero amet! Corrupti,
          quo magnam quia odit ullam accusantium ex non ipsam, id doloribus
          aliquid numquam nesciunt quas asperiores amet maiores veritatis
          dignissimos minus in! Qui suscipit, expedita veritatis reprehenderit
          tempore a recusandae. Blanditiis et, repellendus alias placeat optio
          nulla rerum minima porro voluptatibus consectetur quia ut animi
          cumque? Eius velit libero dicta laboriosam dolores repellendus sit
          unde cum nostrum sunt asperiores culpa incidunt cumque quia iure ex
          eum illum ab ad ducimus, quidem, distinctio quaerat minus ea!
          Quibusdam perspiciatis nesciunt consectetur.
        </p>
      </div>
    </div>
  )
}

export default ModalPage
