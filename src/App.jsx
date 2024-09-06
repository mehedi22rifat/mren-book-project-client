import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function App() {

  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
     <div className="min-h-screen">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  )
}

export default App
