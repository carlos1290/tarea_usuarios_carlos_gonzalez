import './App.css'
import { Home } from './paginas/Home'
import { Route,Routes } from 'react-router-dom'
import { Navbar } from './componetes/navbar'
import { User } from './paginas/Usuarios'
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='usuarios' element={<User/>}/>
      <Route path="usuarios/pais" element={<usuarios-pais/>}/>
    </Routes>

    </>
    
  )
}

export default App
