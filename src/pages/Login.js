import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import UserLogin from "../components/UserLogin/UserLogin";

import { useState } from "react";




export default function Login(props) {


    return (
    <div>
       
            <div><NavBar/></div>

            <div class="login-component">
                <div class="left-column">
                        <img src="https://i.imgur.com/g9FWsKz.png"  width="400px"/>
                        <p>Welcome to the 50 BY 50 community. Log in to track your journey across the United States
                                and find inspiration from like-minded travelers. Once you establish an account
                                and log in, start tracking your progress on the MY 50 page.</p>
                </div>
                
                <div class="right-column">
                        {/* <div id="loginForm">
                                <UserLogin/> <br/>
                        </div> */}

                        <div id="signinForm">
                                <SignUpForm setUser={props.setUser} />
                </div>
                </div>
        </div>

            <div><Footer/></div>


    </div>
    );
  } 