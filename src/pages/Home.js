import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import FeaturedLocation from "../components/FeaturedLocation/FeaturedLocation";
import Footer from "../components/Footer/Footer";


export default function Home(props) {
    return (
    <div>
        <div><NavBar/></div>

        <div><Header/></div>

        <div><About/></div>

        <div><FeaturedLocation/></div>

        <div><Footer/></div>

    </div>
    );
  } 