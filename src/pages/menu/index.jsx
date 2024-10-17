import React from 'react';
import { useState } from 'react';
import { Data } from "../../data/data.jsx"
import "./style.scss";
import Menuburger from "../../images/menu_burger.png"
import Gamburgur from "../../images/gamburgur.png"
import Star from "../../images/star.png"

export const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(true); // Set to true when button is clicked
    };


    return (
        <>
            <div className="container">
                <div id='menu' className="menu">
                    <div className="menu__left">
                        <img width={"619px"} src={Menuburger} alt="img" />
                    </div>
                    <div className="menu__right" style={{
                        width: expanded ? '100%' : 'auto',
                        transition: 'width 4ms ease, height 4ms ease',
                        overflow: 'hidden',
                        gridTemplateColumns: expanded ? '1fr 1fr 1fr 1fr 1fr' : '0fr 0fr',
                        gridTemplateRows: expanded ? '1fr 1fr 1fr 1fr' : '2fr 2fr 2fr 2fr',
                    }}>
                    {
                        Data.map((item, i) => (
                            <div className='card' key={i} style={{
                                marginLeft: expanded ? 'auto' : '45px',
                            }}>
                                <img className='card__img' src={Gamburgur} alt="img" />

                                <h1>{item.name}</h1>

                                <p>{item.composition}</p>

                                <small><img src={Star} alt="img" />{item.rating}</small>

                                <div className="prise">
                                    <h4>$ {item.price}</h4>
                                    <button className='add__product'>+</button>
                                </div>
                            </div>
                        ))
                    }
                    {!expanded && (
                        <button id='menuBtn' className="menu__btn" onClick={handleToggle}>
                            SEE ALL
                        </button>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
};

