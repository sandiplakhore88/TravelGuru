import React, { useEffect } from "react";
import "./footer.css";

//<==== import react icons ====>
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
// import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

// <==== import aos for scroll animation ====>
import Aos from "aos";
import "aos/dist/aos.css";

// <==== import video for show in footer ====>
import oceanWavesFooter from "../../Assets/oceanWavesFooter.mp4";

const Footer = () => {
    // <==== adding scroll animation  ====>
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        // <==== footer section ====>
        <section className="footer">
            <div className="videoDiv">
                <video src={oceanWavesFooter} loop autoPlay muted typeof="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text" data-aos="fade-up">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" data-aos="fade-up" placeholder="Enter Email Address" />
                        <button type="submit" className="btn flex" data-aos="fade-up">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <span className="logo flex">
                                <MdOutlineTravelExplore className="icon" />
                                TravelGuru.
                            </span>
                        </div>

                        <div className="footerParagraph" data-aos="fade-up">
                            TravelGuru is more than just a travel website; we're your travel partner. With years of experience in the industry, our team of travel enthusiasts is committed to curating exceptional travel experiences that cater to your unique preferences and interests. TravelGuru is here to help you explore the world.
                        </div>

                        <div className="footerSocials flex" data-aos="fade-up">
                            {/* <AiOutlineTwitter className="icon" /> */}
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    {/* Group of footer links */}
                    <div className="footerLinks grid">

                        {/* Group One Our Agency */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/* Group Two Partners */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TheTaj
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                IRCTC
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                AirIndia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tripadvisor
                            </li>
                        </div>

                        {/* Group Three Last Minutes */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
                            <span className="groupTitle">
                                LAST MINUTES
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                India
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                France
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Australia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Brazil
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>
                            WORLD BEST TRAVEL WEBSITE
                        </small>
                        <small>
                            ALL RIGHTS RESERVED © SANDIPLAKHORE 2023
                        </small>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Footer;