import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="root-layout h-screen flex flex-col">
      <Header />

      <div className="flex m-4 items-start max-w-[1024px] h-full">
        <Sidebar />

        <main className="w-full h-full flex items-start justify-start ml-16">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout
