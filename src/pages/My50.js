import StateList from "../components/StateList/StateList";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function My50(props) {
    return (
    <div>
        
        <div><NavBar /></div>

        <div><StateList /></div>

        <div><Footer /></div>

    </div>
    );
  } 