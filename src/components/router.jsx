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
import ModalPage from "../pages/modal/ModalPage"
import AppsLayout from "../layouts/AppsLayout"
import TablePage from "../pages/table/TablePage"
import CounterPage from "../pages/CounterPage"
import PlaylistPage from "../pages/playlist/PlaylistPage"

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
        path: "/apps",
        element: <AppsLayout />,
        children: [
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
            element: <BookListPage />,
          },
          {
            path: "dropdown",
            element: <DropdownPage />,
          },
          {
            path: "modal",
            element: <ModalPage />,
          },
          {
            path: "table",
            element: <TablePage />,
          },
          {
            path: "counter",
            element: <CounterPage />,
          },
          {
            path: "playlist",
            element: <PlaylistPage />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
])

export default router
