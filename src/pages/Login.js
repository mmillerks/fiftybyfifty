import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import UserLogin from "../components/UserLogin/UserLogin";


export default function Login(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div>
                <h3>Welcome to the 50 BY 50 community. Log in to track your journey across the United States
                        and find inspiration from like-minded travelers.
                </h3>
            </div>

            <div><SignUpForm/></div>

            {/* <div><UserLogin/></div> */}

            <div><Footer/></div>


    </div>
    );
  } 