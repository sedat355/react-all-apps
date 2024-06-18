import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./css/index.css"
import { RouterProvider } from "react-router-dom"
import router from "./components/router.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
