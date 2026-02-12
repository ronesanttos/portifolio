import './styles/globals.css'
import { Route, Routes } from "react-router-dom";

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import BackToTop from './components/ui/BackToTop.jsx';

import Home from "./pages/Home"
import Sobre from "./pages/Sobre.jsx"
import Contato from "./pages/Contato.jsx"
import ProjectID from "./pages/ProjectID.jsx"
import Projects from "./pages/Projects.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectID />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

