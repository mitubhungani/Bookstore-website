import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/course" element={authUser ?<Courses/>:<Navigate to="/signup"></Navigate>} ></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
