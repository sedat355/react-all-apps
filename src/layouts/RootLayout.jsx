import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex m-4 items-start max-w-[1024px]">
        <Sidebar />

        <main className="w-full flex items-start justify-start ml-16">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout
