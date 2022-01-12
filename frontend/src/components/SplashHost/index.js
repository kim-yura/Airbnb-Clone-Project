import React from 'react';
import { Link } from "react-router-dom";
import './SplashHost.css';

function SplashHost() {
    return (
        <div className="host-container">
            <Link to="/spots/new">
                <div className="host-text">
                    Become a Host.
                </div>
                <div id="splash-host">Image 01</div>
            </Link>
        </div>
    )
};

export default SplashHost;
