import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss"
import { auth } from "../../firebase/firebase.uitls";
import { ReactComponent as Logo } from "../../assests/084 crown.svg";


const Header=({currentUser}) =>(
    <div className="header">

        <Link className="logo-container" to="/">
        <Logo className="log" />

        </Link>
        <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="/shop">
            CONTACT
        </Link>
        {
            currentUser ?
            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }

        </div>
    </div>
)


export default Header;