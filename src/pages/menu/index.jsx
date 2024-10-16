import React from 'react';
import "./style.scss"
import Menuburger from "../../images/menu_burger.png"

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="menu__left">
                    <img width={"619px"} src={Menuburger} alt="img" />
                </div>
            </div>
        </>
    );
};
