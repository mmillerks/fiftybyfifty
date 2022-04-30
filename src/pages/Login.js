import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import UserLogin from "../components/UserLogin/UserLogin";


export default function Login(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div id="loginDisplay">

                <div id="instructions">
                        <h3>Welcome to the 50 BY 50 <br/> community. Log in to track your journey across the United States
                                and find inspiration from like-minded travelers. Once you establish an account
                                and log in, start tracking your progress on the MY 50 page.
                        </h3>
                </div>

                <div>
                        <UserLogin/> <br/>
                        <SignUpForm setUser={props.setUser} />
                </div>

                

            </div>

            <div><Footer/></div>


    </div>
    );
  } 