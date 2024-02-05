// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HeaderContent from './components/Headercontent';
import Body from './components/Body';
import './App.css';
import Footer from './components/footer';
import UncontrolledExample from './Carausel';
import Bookfind from './components/Bookdesc';
import Cartlist from './components/Cartlist';
import { useState } from 'react';
const App = () => {
  const [cart,setCart]=useState([]);
  return (
   <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderContent />
              <UncontrolledExample />
              <Body />
              <Footer />
            </>
          }
        />
        <Route path='/:id' element={
          <>
          <HeaderContent />
          <Bookfind setCart={setCart}/>
          <Footer />
        </>
      } 
      />
      <Route path='/cart' element={
        <>
        <HeaderContent/>
        <Cartlist Data={cart}/>
        </>
      }/>
      </Routes>
    
  );
};

export default App;
