import NavBar from './components/NavBar/NavBar';
import AddFavorite from './components/AddFavorite/AddFavorite';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FeaturedLocation from './pages/FeaturedLocation';
import Home from './pages/Home';
import My50 from './pages/My50';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import './App.css';


import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import mongoose from 'mongoose';


//DBASE SETUP
// require('dotenv').config()
// const mongoose = require("mongoose");
// const mongoURI = process.env.MONGO_URI;
// const db = mongoose.connection;
// mongoose.connect(mongoURI);
// Define callback functions for various events
// db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
// db.on("open", () => console.log("mongo connected: ", mongoURI));
// db.on("close", () => console.log("mongo disconnected"));

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      
      <main className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/My50" element={<My50 />} />
            <Route path="/FeaturedLocation" element={<FeaturedLocation />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      </main>

      
    </div>
  );
}

export default App;
