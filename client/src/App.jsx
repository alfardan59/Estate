import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import SignUp from "./pages/Signup"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
