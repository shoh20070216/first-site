import './Components/Home/All.css';
import React from 'react'
import './App.css';

import BurgerHead from './Components/Burger/BurgerHead';
import Head from './Components/Home/Head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KebabHead from './Components/Kebab/KebabHead';
import Leg1 from './Components/Home/Leg1';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="banner_conteiner">
        </div>
        {/* <Head /> */}
        
        <Routes>
          <Route path="/" element={<Head />}></Route>
          <Route path="/burger" element={<BurgerHead />}></Route>
          <Route path="/kebab" element={<KebabHead />}></Route>
        </Routes>
        <Leg1 />
      </BrowserRouter>
    </>
  );
}

export default App;
