import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
