import React from 'react';
import Gamburger from "../../images/hamburger.png"
import "./style.scss"
import Chefs from "../../images/professionalchef.png"
import Food from "../../images/itemsoffood.png"
import Knife from "../../images/experianced.png"
import Pizza from "../../images/pizza.png"

export const Hero = () => {
    return (
        <div className="container">
            <div className='hero'>
                <div className="hero__left">
                    <strong className='hero__title1'>Tasty Food</strong><br />
                    <strong className='hero__title2'>Collections</strong><br />
                    <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius sed pharetra dictum neque massa congue</p>
                    <button className='hero__btn'>See All</button>
                    <button id='hero_menu' className='hero__btn hero__btn--white'>Menu</button>
                </div>
                <div className="hero__right">
                    <img width={"740px"} height={"700px"} src={Gamburger} alt="img" />                    
                </div>
            </div>

            <div className="hero__bottom">
                <div className="hero_card">
                    <img src={Chefs} alt="img" />
                    <small>Professional Chefs</small>
                    <h4>420</h4>
                </div>

                <div className="hero_card">
                    <img src={Food} alt="img" />
                    <small>Items Of Food</small>
                    <h4>320</h4>
                </div>

                <div className="hero_card">
                    <img src={Knife} alt="img" />
                    <small>Years Of Experienced</small>
                    <h4>30+</h4>
                </div>

                <div className="hero_card">
                    <img src={Pizza} alt="img" />
                    <small>Happy Customers</small>
                    <h4>220</h4>
                </div>
            </div>
        </div>
    );
};
