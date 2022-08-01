import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './input.css';
import Navbar from './Components/Navbar/Navbar'


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
    </div>
  );
}

export default App;
