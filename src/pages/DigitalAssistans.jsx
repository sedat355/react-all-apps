import alexa from '../assets/images/alexa.png'
import cortana from '../assets/images/cortana.png'
import siri from '../assets/images/siri.png'
import Card from '../components/Card'

const cardsData = [
  {
    id: 0,
    imageUrl: alexa,
    title: 'Alexa',
    subtitle: '@alexa99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 1,
    imageUrl: cortana,
    title: 'Cortana',
    subtitle: '@cortana33',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ex, convallis '
  },
  {
    id: 2,
    imageUrl: siri,
    title: 'Siri',
    subtitle: '@siri77',
    description: 'Lorem ipsum dolor sit amet, vehicula in tortor non Praesent ullamcorper accumsan condimentum. '
  },

]
const DigitalAssistans = () => {
  return (
    <div className='flex gap-x-2'>
      {cardsData.map(card => {
        return <Card key={card.id} card={card}/>
      })}
    </div>
  )
}

export default DigitalAssistans