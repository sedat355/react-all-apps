import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex m-4'>
      <Sidebar/>

      <main className='w-full flex items-center justify-center'>
        <Outlet/>
      </main>
    
    </div>
  )
}

export default RootLayout