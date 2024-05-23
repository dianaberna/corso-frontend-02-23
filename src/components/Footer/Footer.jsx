import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">

            <div className="footer-header">

                {/* Menu */}
                <div class="footer-nav">
                    <h3>Leo Gianluigi</h3>
                    <ul>
                        <li>
                            <a href="http://">Home</a>
                        </li>
                        <li>
                            <a href="http://">Chi Sono</a>
                        </li>
                        <li>
                            <a href="http://">Skills</a>
                        </li>
                        <li>
                            <a href="http://">Progetti</a>
                        </li>
                        <li>
                            <a href="http://">Contatti</a>
                        </li>
                    </ul>
                </div>


                {/* Contatti */}
                <div class="footer-nav">
                    <h3>Contatti</h3>
                    <ul>
                        <li>Tel: 2171172</li>
                        <li>email: sdijdsiojds</li>
                    </ul>
                </div>
            </div>

            <div className="footer-body">
                <p> Copyright © 2024 Leo Gianluigi </p>
            </div>



        </div>
    );
}

export default Footer;