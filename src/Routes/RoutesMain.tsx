import Home from '../Pages/Home/Home';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login/Login';
import Shop from '../Pages/Shop/Shop';
import Featured from '../Pages/Featured/Featured';
import Recommended from '../Pages/Recommended/Recommended';
import Checkout from '../Pages/Checkout/Checkout';
import NotFound from '../Pages/NotFound/NotFound';
import PDP from '../Pages/PDP/PDP';


function RoutesMain() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/featured' element={<Featured/>}/>
            <Route path='/recommended' element={<Recommended/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/product/:id' element={<PDP/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain