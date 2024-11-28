import './App.css'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Tour_packeg from './pages/Tour_packeg'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Registration from './pages/Registration'


function App() {
  return (
    <>
     {/*<Menu/>
        <div className='container'><Tour_packeg/></div>
        <Footer/> */}


                            <BrowserRouter>
                            <Menu/>
                              <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/tour_packeg' element={<Tour_packeg/>}/>
                                <Route path='/contect' element={<Contact/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='/registration' element={<Registration/>}/>
                              </Routes>
                            <Footer/>
                            </BrowserRouter>
    </>
  )
}

export default App
