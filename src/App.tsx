import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pages from './pages'
import Navbar from "./components/Navbar"
import ServiceDetail from './components/ServiceDetail'
import Footer from './components/Footer'
import Success from './components/Success'
// import About from './components/About'

function App() {


  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Pages/>}/>
        {/* <Route path='/about' element= {<About/>}/> */}
        <Route path='/service/:id' element ={<ServiceDetail/>} />
        <Route path='/success' element = {<Success/>}/>
      </Routes>

      <Footer/>
    </Router>
      
    </>
  )
}

export default App
