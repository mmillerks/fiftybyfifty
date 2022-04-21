import My50 from "../../pages/My50";
import React from "react";
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
      <div id="navbar">
        <nav>
          <img src="https://i.imgur.com/fe7Wdm1.png?1" title="source: imgur.com" width="200px"/>
          <a href="login">LOGIN</a>
          <a href="#favorites">FAVORITES</a>
          <a href="#featured">FEATURED LOCATION</a>
          <Link to="/My50">MY 50</Link>
          <a href="#home">HOME</a>
        </nav>
      </div>
    );
  } 