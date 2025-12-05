import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Service from "./components/Service"
import Testimonial from "./components/Testimonial"

const Pages = () => {
  return (
    <div className="min-h-screen bg-background">
        
        <Home />
        <About />
        <Service />
        {/* <Testimonial /> */}
        <Contact/>
      
    </div>
  )
}

export default Pages
