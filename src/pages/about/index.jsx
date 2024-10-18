import React from 'react';
import "./style.scss"
import Aboutimg from "../../images/about-img.png"
import Aboutburger1 from "../../images/about-burger-1.png"
import Aboutburger2 from "../../images/about-right-burger.png"

export const About = () => {
    return (
        <>
            <div className="container">
                <div id="about">
                    <div className="about__box">
                        <img width={"140px"} src={Aboutburger1} alt="img" />
                        <h1>About Us</h1>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <img src={Aboutimg} alt="img" />
                    <img className='about__bgimg' src={Aboutburger2} alt="img" />
                </div>
            </div>
        </>
    );
};
