import React from "react";
import './navbar.less'
import Logo from '..//..//assets/img/navbar-logo.svg'

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="container">
            <img src = {Logo} alt ="" className="navbar__logo"> </img>
            <div className="navbar__header">SMART BOARD</div>
            <div className="navbar_login">Войти</div>
            <div className="navbar_registration">Регистрация</div>

            </div>
        </div>
    )
}

export default Navbar;