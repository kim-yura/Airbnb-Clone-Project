import React from 'react';
import { Link } from "react-router-dom";
import './SplashHost.css';

function SplashHost() {
    return (
        <div className="host-container">
            <Link to="/spots/new" className="splash-host-link">
                <div className="host-text">
                    Become a Host.
                </div>
                <img id="splash-host" src="https://sparebnb.s3.amazonaws.com/host_01.jpg" alt="A Black family hosts in their living room"/>
            </Link>
        </div>
    )
};

export default SplashHost;
