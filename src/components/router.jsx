import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Accordion from "../pages/Accordion";
import DigitalAssistans from "../pages/DigitalAssistans";
import ButtonPage from "../pages/ButtonPage";
import AddAnimal from "../pages/AddAnimal";
import ImageGallery from "../pages/ImageGallery";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'button-page',
        element: <ButtonPage/>
      },
      {
        path: 'accordion',
        element: <Accordion/>
      },
      {
        path: 'digital-assistans',
        element: <DigitalAssistans/>
      },
      {
        path: 'add-animal',
        element: <AddAnimal/>
      },
      {
        path: 'image-gallery',
        element: <ImageGallery/>
      },
    ]
  }
])

export default router;