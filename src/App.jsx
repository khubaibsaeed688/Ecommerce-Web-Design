import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/footer'
import Headers from './Component/Header/header'
import Category from './Pages/Category/category'
import Grid from './Pages/Grid/grid'
import Home from './Pages/Home/home'
import Detail from './Pages/Detail/detail'
import MyCard from './Pages/My Card/MyCard'

function App() {

  return (
    <>
      <Headers/>
      <Routes>
        <Route path='*' element={<Navigate to={"/"} />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/grid' element={<Grid/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/mycard' element={<MyCard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
