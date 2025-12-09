import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
// import Testimonial from "./components/Testimonial"

const Pages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>  
      <Home />
      <About />
      <Service />
      {/* <Testimonial /> */}
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Pages
