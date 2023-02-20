import React from "react";
import './header.scss'
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = ({basket}) => {
    const [ openMenu, setOpenMenu ] = useState(false);
    
    return (
        <header className="header">
            <Link to="/" className="logo"><img src={logo} alt={logo}/></Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
            <li><a href="#work">Our Work</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
            <li id="cartBox">
                <div className="menuCart" style={{backgroundImage: `url(${cart})`}} onClick={() => setOpenMenu(current => !current)}>
                    <div className="menuCartCircle">15</div>
                    {openMenu ? <div className="menuCartList">
                                    {basket?.map((item)=>{
                                        return <p key={item.id + Math.random()}>{item.name}</p>
                                    })}
                                </div> : ''}
                </div>
            </li>
            </ul>
            <Outlet/>
        </header>
    )
}

export default Header;