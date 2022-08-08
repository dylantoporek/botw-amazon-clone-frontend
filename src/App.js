import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './input.css';
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';


function App() {

  const [weapons, setWeapons] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:3000/weapons/index')
      .then((r) => r.json())
      .then(weapons => setWeapons(weapons))

  }, [])

  console.log(weapons)

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
