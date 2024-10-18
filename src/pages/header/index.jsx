import React from 'react';
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { RiShoppingBagLine } from "react-icons/ri";
import "./style.scss";

export const Header = () => {
    return (
        <header>
            <div className="container">
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
                <div className="icons">
                    <a href="#"><CiSearch style={{width: "27px", height: "27px"}}/></a>
                    <a href="#"><RxPerson style={{width: "27px", height: "27px"}}/></a>
                    <a href="#"><RiShoppingBagLine style={{width: "27px", height: "27px"}}/></a>
                </div>
            </nav>
            </div>
        </header>
    );
};
