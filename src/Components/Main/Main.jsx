import React, { useEffect } from "react";
import "./main.css";
import { Data } from "./data";

//<==== import react icons ====>
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// <==== import aos for scroll animation ====>
import Aos from "aos";
import "aos/dist/aos.css";


const Main = () => {
    // <==== adding scroll animation  ====>
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        // <==== section for show cards and other data ====>
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title" data-aos="fade-right">
                    Most visited destinations
                </h3>
            </div>

            {/* <==== section for show only cards ====> */}
            <div className="secContent grid">
                {
                    //<==== create card ====>
                    Data.map((items) => {
                        return (
                            <div className="singleDestination" data-aos="fade-up" key={items.id}>
                                <div className="imageDiv">
                                    <img src={items.imgSrc} alt={items.destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {items.destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{items.location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {items.grade}
                                                <small>+{items.marks}</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{items.fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{items.description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Main;