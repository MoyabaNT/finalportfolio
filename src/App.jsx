import About from "./Components/About";
import Home from "./Components/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import { ThemeProvider } from './Context/ThemeContext';
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      element={
        <div>
          <NavBar />
          <Socials />
        </div>
      }
    >

    </Route>
    <Route index='/Home' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Projects' element={<Projects />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Stack' element={<Stack />} />
    <Route path='/TheCards' element={<TheCards />} />

    </>
  )
)

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>  )
}

export default App