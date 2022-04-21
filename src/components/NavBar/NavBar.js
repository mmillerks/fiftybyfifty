import My50 from "../../pages/My50";
import React from "react";
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
      <div id="navbar">
        <nav>
          <img src="https://i.imgur.com/fe7Wdm1.png?1" title="source: imgur.com" width="200px"/>
          <Link to="/Login">LOGIN</Link>
          <Link to="/Favorites">FAVORITES</Link>
          <Link to="/FeaturedLocation">FEATURED LOCATION</Link>
          <Link to="/My50">MY 50</Link>
          <Link to="/">HOME</Link>
        </nav>
      </div>
    );
  } 