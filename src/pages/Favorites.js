
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FavoriteList from "../components/FavoriteList/FavoriteList";
import AddFavorite from "../components/AddFavorite/AddFavorite";
import { useState } from "react";

export default function Favorites(props) {

   const [visitedStates, setVisitedStates] = useState([]);

    return (
    <div id="favoritePg">
       
            <div><NavBar/></div>

            <div><AddFavorite visitedStates={visitedStates} setVisitedStates={setVisitedStates}/></div>

            <div><FavoriteList visitedStates={visitedStates} setVisitedStates={setVisitedStates}/></div>

            <div><Footer/></div>


    </div>
    );
  } 

  