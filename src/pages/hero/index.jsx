import React from 'react';
import Gamburger from "../../images/hamburger.png"
import "./style.scss"

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
                    <button id='menu' className='hero__btn hero__btn--white'>Menu</button>
                </div>
                <div className="hero__right">
                    <img width={"740px"} height={"700px"} src={Gamburger} alt="img" />                    
                </div>
            </div>
        </div>
    );
};
