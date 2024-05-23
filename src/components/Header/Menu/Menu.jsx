import React, { useState } from 'react';
import "./Menu.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="Menu">

            <div id="hamburgher"
                className={isOpen ? "open" : ""}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={isOpen ? "menu-content" : "menu-content hidden"}>
                <ul>
                    <h3 className='menu-title'>Gianluigi Leo</h3>

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
        </div>
    );
}

export default Menu;