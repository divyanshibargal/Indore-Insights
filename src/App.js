import './App.css';
import React  from 'react';
// import {getPlaceData} from './api'
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
// import Temples from './components/Temples'
import { 
  BrowserRouter, 
  Routes,
  Route,
  // Link
 } from 'react-router-dom';
import Popular from './components/Popular';
import Waterfall from './components/Waterfall';
import Hotel from './components/Hotel';
import About from './components/About/About';
import Reach from './components/Reach';
import Time from './components/Time';
import FamousFood from './components/FamousFood';
import Restaurant from './components/Restaurant';
import Shopping from './components/Shopping';
import Thingstodo from './components/Thingstodo';
import University from './components/University';
import Hospital from './components/Hospital'
import Outskirts from './components/Outskirts';
import Outskirts2 from './components/Outskirts2';
import Popular2 from './components/Popular2';
import Things from './components/Things';
import Religious from './components/Religious';
// import Sample from './components/Sample';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        exact path="/" element ={<Home/>}>
      </Route>
      <Route exact path="/about" element ={<About/>} ></Route>
      <Route exact path = "/popular" element ={<Popular/>} ></Route>
      <Route exact path = "/map_popular" element={<Popular2/>}></Route>
      <Route exact path = "/temples" element ={<Religious/>} ></Route>
      <Route exact path = "/waterfall" element ={<Waterfall/>} ></Route>
      <Route exact path = "/hotels" element ={<Hotel />} ></Route>
      <Route exact path = "/famous" element ={<FamousFood />} ></Route>
      <Route exact path = "/restaurants" element ={<Restaurant/>} ></Route>
      <Route exact path = "/shopping" element ={<Shopping/>} ></Route>
      <Route exact path = "/reach" element ={<Reach/>} ></Route>
      <Route exact path = "/Time" element ={<Time/>} ></Route>  
      <Route exact path = "/explore" element ={<Explore/>} ></Route>
      <Route exact path = "/thingstodo" element ={<Thingstodo/>} ></Route>
      <Route exact path = "/things_map" element ={<Things/>} ></Route>
      <Route exact path = "/outskirts" element ={<Outskirts/>} ></Route>
      <Route exact path = "/mapoutskirts" element ={<Outskirts2/>} ></Route>
      <Route exact path = "/education" element ={<University/>} ></Route>
      <Route exact path = "/hospital" element={<Hospital/>}></Route>
      
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
