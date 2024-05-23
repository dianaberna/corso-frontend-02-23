import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="About">
            
            {/* About Header */}
            <div className="about-header">
                <h1 className="about-title">Chi Sono</h1>
            </div>

            {/* About Body */}
            <div className="about-body">

                <div className="about-container">

                    <p className="about-content">
                        Ciao! Sono Gianluigi, ho 32 anni e sono di Salerno, Campania, Italia.
                    </p>

                    <p className="about-content">
                        Fin da quando ero bambino, ho coltivato un amore profondo per l'informatica, che mi ha guidato in un percorso di scoperta e apprendimento continuo.
                    </p><br></br>

                    <p className="about-content">
                        Ho iniziato a sperimentare con il C++ e, con il tempo, ho affinato le mie abilità fino a diventare competente nel linguaggio. Ho anche avuto l'opportunità di esplorare un po' di OpenGL, un mondo affascinante che mi ha permesso di dare vita alle mie idee attraverso la grafica computerizzata.
                    </p>
                    <br></br>

                    <p className="about-content">
                        Per ampliare le mie competenze, ho intrapreso un corso dedicato al Front-End, dove ho avuto l'opportunità di immergermi ancora di più nel vasto e sempre in evoluzione campo dello sviluppo web.
                    </p>

                    <p className="about-content">
                        Attraverso impegno e dedizione, sono riuscito a completare con successo il corso, consolidando le mie conoscenze e acquisendo nuove competenze che ora sono pronte ad essere messe in pratica.
                    </p><br></br>

                    <p className="about-content">
                        Il mio percorso professionale è caratterizzato dalla passione per l'apprendimento autonomo e dalla determinazione nel superare sfide.
                    </p>

                    <p className="about-content">
                        Sono sempre alla ricerca di nuove opportunità di crescita e di progetti stimolanti che mi consentano di mettere in pratica le mie competenze e di continuare a evolvermi nel mondo dell'informatica.
                    </p><br></br>

                </div>

                <img src={require("../../assets/photo2.png")} 
                    alt="Photo" 
                    className="about-photo" 
                />
                
            </div>

        </div>
    );
}

export default About;