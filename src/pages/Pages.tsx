import React from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Doctors } from './Doctors';

export const Pages =()=>{




    return (
        <div className='bg-[#f4f4f4]'>
            <Header/>
            <Navbar/>
           <Routes>
           <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/doctors' element={<Doctors/>}></Route>
           </Routes>

        </div>
    )
}