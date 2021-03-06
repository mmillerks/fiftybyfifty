import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import FeaturedLocation from "../components/FeaturedLocation/FeaturedLocation";
import Footer from "../components/Footer/Footer";


import React from "react";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";

export default function Home(props) {
    return (
    <div id="home">
        <div><NavBar/></div>

        <div><Header/></div>

        {/* <div><About/></div> */}

        <div><HomeCarousel/></div>

        <div><Footer/></div>

    </div>
    );
  } 