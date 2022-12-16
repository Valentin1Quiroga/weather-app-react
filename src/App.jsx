import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainNavbar from "./components/navbar-ppal/main-navbar"
import ErrorPage from "./pages/errorPage"
import ParteUno from "./pages/parte1"
import ParteDos from "./pages/parte2"

function App() {
  return (
    <>
    <Router>
    <MainNavbar/>
    <Routes>
      <Route path='/parte1' element={<ParteUno/>}/>
      <Route path='/parte2' element={<ParteDos/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
    </>
  )
    
}

export default App
