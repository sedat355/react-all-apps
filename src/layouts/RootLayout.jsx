import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex m-4'>
      <Sidebar/>

      <main className='w-full flex items-start justify-start ml-16'>
        <Outlet/>
      </main>
    
    </div>
  )
}

export default RootLayout