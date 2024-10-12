import React, { useState } from 'react';
import logo2 from "../assets/heart.svg";
import logo3 from "../assets/Vector.svg";
import "./heart.css";

const Heart = () => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const handleClick = () => {
        console.log("Heart clicked!"); // Log to see if the click is registered
        setIsHeartClicked(prev => !prev);
    };

    return (
        <div onClick={handleClick}>
            <img
                src={isHeartClicked ? logo3 : logo2}
                alt="Heart Logo"
                className="small-logo"
            />
        </div>
    );
};


export default Heart;

