import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CrossRoad from './toggler/CrossRoad';
import Press from './press/Press'
import MediaContact from './mediaContact/MediaContact';
import Footer from './footer/Footer'
import Ad from './ad/Ad'


function App() {
  
  return (
    <Router>
      <Ad/>
      <Navbar/>
      
      <CrossRoad/>
      <div >
        <Switch>

          <Route exact path="/" >
            <Card/>
          </Route>

          <Route path="/press">
            <Press/>
          </Route>

        </Switch>
        <MediaContact/>
        <Footer/>
      </div>
      
      </Router>


  );
}

export default App;
