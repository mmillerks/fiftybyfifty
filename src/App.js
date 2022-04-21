import NavBar from './components/NavBar/NavBar';
import AddFavorite from './components/AddFavorite/AddFavorite';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FeaturedLocation from './components/FeaturedLocation/FeaturedLocation';
import './App.css';


// import { useState } from 'react';
// import { Routes } from 'react-router-dom';







function App() {
  return (
    <div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');</style>
      <div><NavBar/></div>

      <div><Header/></div>

      <div><About/></div>

      <div><FeaturedLocation/></div>

      <div><Footer/></div>


    </div>
  );
}

export default App;
