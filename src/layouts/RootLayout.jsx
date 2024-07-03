import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />

      <div className="p-4">
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout
