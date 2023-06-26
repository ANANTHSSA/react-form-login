import React from 'react'
import{BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
import Form from './Form';
import Login from './Login';
import Home from './Home';
const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/form/name/task/com' element={<Form/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
  </Routes>
 
  </BrowserRouter>
}

export default Router