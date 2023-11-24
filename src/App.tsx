import './App.css'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Shop } from './pages/ShopAll'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
