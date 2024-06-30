import { useState } from "react"
import AccordionItem from "./AccordionItem"

const initialAccordions = [
  {id: 0, title: "title-1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum. "},
  {id: 1, title: "title-2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum. "},
  {id: 2, title: "title-3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum. "},
]

const Accordion = () => {
  //const [ accordions, setAccordions ] = useState(initialAccordions)

  const renderedAccordions = initialAccordions.map( item => {
    return <AccordionItem key={item.id} item={item}/>
  })

  return (
    <div className="w-full">
     <h2 className="mb-2">Accordion Page</h2>

      <div className="accordion-list flex flex-col gap-y-1">
        {renderedAccordions}
      </div>

    </div>
  )
}

export default Accordion