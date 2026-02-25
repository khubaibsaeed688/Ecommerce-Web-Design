import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/footer'
import Headers from './Component/Header/header'
import Category from './Pages/Category/category'
import Grid from './Pages/Grid/grid'
import Home from './Pages/Home/home'

function App() {

  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/grid' element={<Grid/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
