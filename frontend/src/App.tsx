import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { Error404 } from "./components/Error404"
import Register from "./components/Register";
import Login from "./components/Login"
import WebPage2 from "./components/WebPage2"
import WebPage3 from "./components/WebPage3"
import WebPage4 from "./components/WebPage4"
import WebPage5 from "./components/WebPage5"
import WebPage6 from "./components/WebPage6"
import WebPage7 from "./components/WebPage7"
import WebPage8 from "./components/WebPage8"
import WebPage9 from "./components/WebPage9"
import WebPage10 from "./components/WebPage10"
import WebPage11 from "./components/WebPage11"
import WebPage12 from "./components/WebPage12";
import WebPage13 from "./components/WebPage13";
import WebPage14 from "./components/WebPage14";
import { StepperComp } from "./components/StepperComp";


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stepper" element={<StepperComp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/webPage2" element={<WebPage2 />} />
        <Route path="/webPage3" element={<WebPage3 />} />
        <Route path="/webPage4" element={<WebPage4 />} />
        <Route path="/webPage5" element={<WebPage5 />} />
        <Route path="/webPage6" element={<WebPage6 />} />
        <Route path="/webPage7" element={<WebPage7/>} />
        <Route path="/webPage8" element={<WebPage8/>} />
        <Route path="/webPage9" element={<WebPage9/>} />
        <Route path="/webPage10" element={<WebPage10/>} />
        <Route path="/webPage11" element={<WebPage11/>} />
        <Route path="/webPage12" element={<WebPage12/>} />
        <Route path="/webPage13" element={<WebPage13/>} />
        <Route path="/webPage14" element={<WebPage14/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>


    </>

  )
}



export default App
