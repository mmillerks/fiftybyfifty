import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login Form/LoginForm";
import UserLogin from "../components/UserLogin/UserLogin";


export default function Login(props) {
    return (
    <div>
       
            <div><NavBar/></div>

            <div id="LoginForm"><LoginForm/></div>

            <div id="UserLogin"><UserLogin/></div>

            <div><Footer/></div>


    </div>
    );
  } 