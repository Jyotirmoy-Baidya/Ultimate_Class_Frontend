import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
// import Login from "./Pages/Login"
// import Navs from "./Components/Basics/Navs"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
