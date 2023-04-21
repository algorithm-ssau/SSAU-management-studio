import React from "react";
import './navbar.css';
import Logo from '..//..//assets/img/navbar-logo.svg';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <div className = "navbar">
            <div className="container">
            <img src = {Logo} alt ="" className="navbar__logo"/>
            <div className="navbar__header">SMART BOARD</div>
            {!isAuth &&<div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
            {!isAuth &&<div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
            
            </div>
        </div>
    );
};

export default Navbar;