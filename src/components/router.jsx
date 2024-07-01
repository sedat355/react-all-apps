import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/Home"
import Accordion from "../pages/accordion/Accordion"
import DigitalAssistans from "../pages/DigitalAssistans"
import ButtonPage from "../pages/ButtonPage"
import AddAnimal from "../pages/animals/AddAnimal"
import ImageGallery from "../pages/Image-Gallery/ImageGallery"
import BookListPage from "../pages/book-list/BookListPage"
import About from "../pages/About"
import Contact from "../pages/Contact"
import DropdownPage from "../pages/dropdown/DropdownPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "button-page",
        element: <ButtonPage />,
      },
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "digital-assistans",
        element: <DigitalAssistans />,
      },
      {
        path: "add-animal",
        element: <AddAnimal />,
      },
      {
        path: "image-gallery",
        element: <ImageGallery />,
      },
      {
        path: "book-list-page",
        element: <BookListPage/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "dropdown",
        element: <DropdownPage/>
      },

    ],
  },
])

export default router
