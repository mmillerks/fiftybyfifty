import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FeaturedLocation from "../components/FeaturedLocation/FeaturedLocation";

export default function Favorites(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div><FeaturedLocation/></div>

            <div className="linkButtons">
                <button className="explore">EXPLORE WASHINGTON</button>
                <button className="explore">EXPLORE NEW YORK</button>
                <button className="explore">EXPLORE ALASKA</button>

            </div>

            <div><Footer/></div>


    </div>
    );
  } 