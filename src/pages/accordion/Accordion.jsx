import { useState } from "react"
import AccordionItem from "./AccordionItem"

const initialAccordions = [
  {id: 0, title: "title-1", isClose: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum."},
  {id: 1, title: "title-2", isClose: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum."},
  {id: 2, title: "title-3", isClose: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul interdum, mi mattis consequat tempus, sapien nisl ornare quam, quis vulputate eros nulla ac libero. Quisque efficitur iaculis urna ac bibendum."},
]

const Accordion = () => {
  const [ accordions, setAccordions ] = useState(initialAccordions)

  const handleClose = (id) => {
    setAccordions(
      accordions.map( item => {
        if( item.id === id ) {
          return {...item, isClose: !item.isClose}
        }
        return {...item, isClose: true};
      })
    )
  }

  const renderedAccordions = accordions.map( item => {
    return <AccordionItem handleClose={handleClose} key={item.id} item={item}/>
  })

  return (
    <div className="w-full">
     <h2 className="mb-2">Accordion Page</h2>

     {renderedAccordions}
    </div>
  )
}

export default Accordion