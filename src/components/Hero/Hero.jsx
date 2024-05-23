import React, { useState, useEffect } from 'react';
import "./Hero.css";

import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as CV } from '../../assets/cv.svg';




const Hero = () => {

    const phrases = [
        "Front-End Developer.",
        "Sviluppatore di giochi 2D in C++ e OpenGL.",
        "Sviluppatore di Siti Web completi."
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Cambia frase ogni 3 secondi
    
        return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }, [phrases.length]);
      

    return (
        <div className="Hero">

            {/* Hero Header */}
            <div className="hero-header">
                <img src={require("../../assets/photo.jpg")} 
                    alt="Photo" 
                    className="hero-photo" 
                />

                <div className="social-container">
                    <Github className='github-icon'/>
                    <Linkedin className='linkedin-icon'/>
                    <CV className='cv-icon'/>
                </div>

            </div>


            {/* Hero Body */}
            <div className="hero-body">
                <h1 className="hero-title">Trasformiamo le tue idee in 
                realtà <span>digitali</span>.</h1>
                <p className='hero_phrases'>{phrases[currentPhraseIndex]}</p>
                <button className="hero-button">Scopri di piu</button>
            </div>
        </div>

    );
}

export default Hero;