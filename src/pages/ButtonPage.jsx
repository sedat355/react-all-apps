import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex space-x-2'>
        <Button btnType="primary">Primary</Button>
        <Button btnType="success">Success</Button>
        <Button btnType="danger">Danger</Button>
        <Button btnType="outline">Outline</Button>
      </div>
      <div className='flex flex-col space-y-2'>
        <Button btnType="primary" size='small'>Primary</Button>
        <Button btnType="success" size='medium'>Success</Button>
        <Button btnType="danger" size='large'>Danger</Button>
        <Button btnType="outline" size='full'>Outline</Button>
      </div>
    </div>
  )
}

export default ButtonPage