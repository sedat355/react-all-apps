import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./css/index.css"
import { RouterProvider } from "react-router-dom"
import router from "./components/router.jsx"
import { Provider } from "react-redux"
import store from "./store/index.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>
)
