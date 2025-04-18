import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const ProjectGame = () => {
    const [estadoModal4, cambiarEstadoModal4] = useState(false);

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            Apps
                        </NavLink>
                        <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink>
                    </nav>
                </section>

                <section className="projects__grid games">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                            <img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>

            <Modal
                estado={estadoModal4}
                cambiarEstado={cambiarEstadoModal4}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-game-4.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                Memorama
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsGame-info-4-p2'
                                    defaultMessage="You must guess the 2 pairs of cards in the shortest time and with fewer clicks."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="#" target="_blank">https://Memorama</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <ScrollToTop />

            <Footer />
        </div>
    )
}
export default ProjectGame;
