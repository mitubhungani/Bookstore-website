import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/course" element={<Courses/>} ></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
