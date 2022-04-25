
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FavoriteList from "../components/FavoriteList/FavoriteList";
import AddFavorite from "../components/AddFavorite/AddFavorite";

export default function Favorites(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div><AddFavorite/></div>

            <div><FavoriteList/></div>

            <div><Footer/></div>


    </div>
    );
  } 