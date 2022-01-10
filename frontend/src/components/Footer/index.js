import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <li className="footer-row">
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JSON API</li>
                <li>Git</li>
            </li>
            <div className="divider" />
            <li className="footer-dev">
                <li>©2022 ShareBnb</li>
                <li>Yu Ra Kim</li>
                <a href="https://github.com/kim-yura" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/yura-kim/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </div>
    )
};

export default Footer;
