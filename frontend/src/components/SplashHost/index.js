import React from 'react';
import { Link } from "react-router-dom";
import './SplashHost.css';

function SplashHost() {
    return (
        <Link to="/spots/new">
            <div className="host-container">
                <div className="host-text">
                    Become a Host.
                </div>
                <div id="splash-host">Image 01</div>
            </div>
        </Link>
    )
};

export default SplashHost;
