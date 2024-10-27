import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontPage from './Pages/FrontPage'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import Experiences from './Pages/Experiences'
import Certificates from './Pages/Certificates'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
     <FrontPage/>
     {/* <AboutMe/> */}
     <Projects/>
     <Experiences/>
     <Certificates/>
     <Contact/>

    </>
  )
}

export default App
