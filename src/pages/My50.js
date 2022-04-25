import StateList from "../components/StateList/StateList";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import MyMap from "../components/MyMap/MyMap";
import Favorites from "./Favorites";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AddFavorite from "../components/AddFavorite/AddFavorite";
import MyFavorites from "../components/MyFavorites/MyFavorites";
import My50Status from "../components/My50Status/My50Status";


export default function My50(props) {

    const [exploredStates, setExploredStates] = useState([])
    // const unexploredStates = useState([])
    
    const handleStateExplored = (state) => {
        const updatedStates = exploredStates
        updatedStates.push(state) 
        setExploredStates(updatedStates)
    }

    console.log(exploredStates)


    return (
    <div>
        <div><NavBar /></div>
        <br/>

        <div id="welcome">Welcome </div>
        <br/>

        <div><StateList onStateExplored={handleStateExplored} /></div>
        <br/>

        <div><My50Status exploredStates={exploredStates}/></div>
        <br/>

        <div><MyMap /></div>
        <br/>

        <div><MyFavorites/></div>
        <br/>

        <div><Footer /></div>

    </div>
    );
  } 