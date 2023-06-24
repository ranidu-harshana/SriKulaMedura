import React from "react";
import "./Navbar.css";


export const Navbar = () => {
    return (
        <div className="user-login">
            <div className="div">
                <div className="navigation-bar">
                    <div className="overlap-group-2">
                        <div className="overlap-4">
                            <div className="divider"/>
                            <p className="home-about-us-FAQ">
                                Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
                                Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FAQ
                            </p>
                        </div>
                        <img className="facebook-ficon" alt="Facebook ficon" src="facebook-ficon.png"/>
                        <img className="instagram-ficon" alt="Instagram ficon" src="instagram-ficon.png"/>
                        <img className="sri-kula-medura-logo" alt="Sri kula medura logo"
                             src="logo.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;