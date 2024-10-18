import React from 'react';
import Appburger from "../../images/appburger.png"
import "./style.scss"

export const Appbrg = () => {
    return (
        <>
            <div className="appbrg">
                <div className='container'>
                    <img width={"100%"} src={Appburger} alt="img" />
                </div>
            </div>
        </>
    );
};
