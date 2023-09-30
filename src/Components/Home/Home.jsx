import React, { useEffect } from "react";
import "./home.css";
import oceanWavesHome from "../../Assets/oceanWavesHome.mp4";

// <==== import react icons ====>
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaThreads } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// <==== import aos for scroll animation ====>
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    // <==== adding scroll animation  ====>
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        // <==== home section ====>
        <section className="home">
            <div className="overlay"></div>
            <video src={oceanWavesHome} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText" data-aos="fade-up">
                        Our Packages
                    </span>
                    <h1 className="homeTitle" data-aos="fade-up">
                        Search your Holiday
                    </h1>
                </div>

                <div className="cardDiv grid" data-aos="fade-up">
                    {/*==== destination input ====*/}
                    <div className="destinationInput">
                        <label htmlFor="city">
                            Search your destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here...." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    {/*==== date input ====*/}
                    <div className="dateInput">
                        <label htmlFor="date">
                            Select your date:
                        </label>
                        <div className="input flex">
                            <input type="date" placeholder="Enter name here...." />
                        </div>
                    </div>

                    {/*==== price input ====*/}
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">
                                Max price:
                            </label>
                            <h3 className="total">Rs: 150000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    {/* <==== more filter  ====> */}
                    <div className="searchOption flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                {/* <==== social media icon for home section ====> */}
                <div className="homeFooterIcons flex" data-aos="fade-up">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaThreads className="icon" />
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;