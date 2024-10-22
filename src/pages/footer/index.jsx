import React from 'react';
import "./style.scss"
import Facebook from "../../images/fasebook.png"
import Twitter from "../../images/twitter.png"
import Instagram from "../../images/instagram.png"
import Youtube from "../../images/youtube.png"
import RightArrow from "../../images/right.png"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__top">
                    <h1>Subscribe To Our Newsletter</h1>
                    <div className="footer__input">
                        <input type="text" placeholder='Enter your email' />

                        <button>Subscrib now</button>
                    </div>
                    <div className="footer__socials">
                        <a href="#"><button><img src={Facebook} alt="img" /></button></a>
                        <a href="#"><button><img src={Twitter} alt="img" /></button></a>
                        <a href="https://www.instagram.com/__vafoyev__"><button><img src={Instagram} alt="img" /></button></a>
                        <a href="https://youtu.be/iyLdoQGBchQ?si=p5_A5TplobYsqcAu"><button><img src={Youtube} alt="img" /></button></a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">

                        <h1>Explore</h1>
                    <div className="footer__bottom__txt1">
                        <ul>
                            <li><img src={RightArrow} alt="img" /><a href="#">Home</a></li>
                            <li><img src={RightArrow} alt="img" /><a href="#about">About us</a></li>
                            <li><img src={RightArrow} alt="img" /><a href="#">Contact us</a></li>
                        </ul>
                        <ul>
                            <li><img src={RightArrow} alt="img" /><a href="#">Blog</a></li>
                            <li><img src={RightArrow} alt="img" /><a href="#">Team</a></li>
                            <li><img src={RightArrow} alt="img" /><a href="#">Our Menu</a></li>
                        </ul>
                    </div>

                    <div className="footer__bottom__txt2">
                        <h1>Contact us</h1>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};
