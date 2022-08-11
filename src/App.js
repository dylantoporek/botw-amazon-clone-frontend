import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './input.css';
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import { useSelector, useDispatch } from 'react-redux';
import {
    initialStateSetter,
    selectAllWeapons
} from './app/Redux-Slices/weaponSlice'


function App() {
  const dispatch = useDispatch()
  const [weapons, setWeapons] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/weapons/index')
        .then((r) => r.json())
        .then((weapons) => dispatch(initialStateSetter(weapons)))    
  }, [])


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
