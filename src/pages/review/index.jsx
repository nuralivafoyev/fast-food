import React from 'react';
import "./style.scss"
import Customer from "../../images/customer.png"
import Imgburger from "../../images/imageburger.png"

export const Review = () => {
    return (
        <>
            <div className="container">
                <div className="review">
                    <div className="review__left">
                        <h1>Customer Review</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className="review__customer">
                            <img src={Customer} alt="img" />
                            <div className="review__customer__text">
                                <h1>Abdur Rahman</h1>
                                <small>Customer</small>
                            </div>
                        </div>
                    </div>


                    <div className="review__right">
                        <img src={Imgburger} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};
