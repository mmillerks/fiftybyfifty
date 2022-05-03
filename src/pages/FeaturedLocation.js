import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FeaturedLocation from "../components/FeaturedLocation/FeaturedLocation";

export default function Favorites(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div><FeaturedLocation/></div>

            <div className="linkButtons">
                <button className="explore">Explore Washington</button>
                <button className="explore">Explore New York</button>
                <button className="explore">Explore North Carolina</button>

            </div>

            <div><Footer/></div>


    </div>
    );
  } 