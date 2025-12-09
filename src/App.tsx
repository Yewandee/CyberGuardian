import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pages from './pages'
import ServiceDetail from './components/ServiceDetail'
import Success from './components/Success'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<Pages/>}/>
        <Route path='/service/:id' element ={<ServiceDetail/>} />
        <Route path='/success' element = {<Success/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
