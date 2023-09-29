// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import LayoutWebsite from './components/Layout/LayoutWebsite';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutWebsite/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/donna' element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}


export default App
