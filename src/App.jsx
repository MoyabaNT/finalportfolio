import About from "./Components/About";
import Home from "./Components/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index='/Home' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Projects' element={<Projects />} />
    <Route path='/Contact' element={<Contact />} />

    </>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App