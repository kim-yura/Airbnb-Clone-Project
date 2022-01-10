import React from 'react';
import './SplashImage.css';

function SplashImage() {
    return (
        <div className="splash-container">
            <ul className="splash-images">
                <li>
                    <div id="splash-01">Image 01</div>
                </li>
                <li>
                    <div id="splash-02">Image 02</div>
                </li>
                <li>
                    <div id="splash-03">Image 03</div>
                </li>
                <li>
                    <div id="splash-04">Image 04</div>
                </li>
                <li>
                    <div id="splash-05">Image 05</div>
                </li>
            </ul>
            <div className="splash-text">
                Travel more, with less.
            </div>
        </div>
    )
}

export default SplashImage;
