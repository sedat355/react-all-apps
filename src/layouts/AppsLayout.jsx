import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const AppsLayout = () => {
  return (
    <>
      <div className="flex m-4 items-start max-w-[1024px]">
        <Sidebar />

        <main className="w-full flex items-start justify-start ml-16">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppsLayout