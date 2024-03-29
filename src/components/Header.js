import { Logo } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
           <img src = {Logo} >
           </img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" 
                  onClick = {() => btnName === "Login" 
                  ? setBtnName("Logout")
                  : setBtnName("Login")}
                >
                  {btnName}
            </button>
          </ul>
        </div> 
      </div>
    );
  };


  export default Header