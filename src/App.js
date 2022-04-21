import NavBar from './components/NavBar/NavBar';
import AddFavorite from './components/AddFavorite/AddFavorite';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FeaturedLocation from './components/FeaturedLocation/FeaturedLocation';
import Home from './pages/Home';
import './App.css';


import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';




function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');</style>
      
      <main className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </main>

      
    </div>
  );
}

export default App;
