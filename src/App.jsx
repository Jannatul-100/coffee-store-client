
import { Outlet } from 'react-router-dom'
import './App.css'
import Headers from './components/Headers'
import Footer from './components/Footer'



function App() {



  return (
    <div>

      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
