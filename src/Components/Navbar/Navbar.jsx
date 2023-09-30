import React, { useState } from "react";
import "./navbar.css";

// <==== import react-icons ====>
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState("navBar");

    // <==== function for show navbar when click on hamburger button ====>
    const showNav = () => {
        setActive("navBar activeNavbar");
    }

    // <==== function for hide navbar when click on cancel button ====>
    const hideNav = () => {
        setActive("navBar");
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                {/*==== logo and name */}
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            {/*==== using react-icons ====*/}
                            <MdOutlineTravelExplore className="icon" />
                            TravelGuru.
                        </h1>
                    </a>
                </div>

                {/*==== navbar menus ====*/}
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Package</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    {/*==== cancel button for hide menus ====*/}
                    <div className="closeNavbar" onClick={hideNav}>
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                {/*==== hamburger button for show menus ====*/}
                <div className="toggleNavbar" onClick={showNav}>
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
}

export default Navbar;