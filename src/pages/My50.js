import StateList from "../components/StateList/StateList";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import MyMap from "../components/MyMap/MyMap";
import Favorites from "./Favorites";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddFavorite from "../components/AddFavorite/AddFavorite";
import MyFavorites from "../components/MyFavorites/MyFavorites";

export default function My50(props) {
    return (
    <div>
        <div><NavBar /></div>
        <br/>

        <div>Welcome </div>

        <div><StateList /></div>
        <br/>

        <div><MyMap /></div>
        <br/>

        <div><MyFavorites/></div>
        <br/>

        <div><Footer /></div>

    </div>
    );
  } 