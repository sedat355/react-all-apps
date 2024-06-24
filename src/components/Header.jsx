import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="mb-4 bg-blue-800 flex items-center justify-between px-4 py-2">
      <h1 className="text-white">React All Apps</h1>

      <ul className="flex space-x-4">
        <li className="navbar-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
