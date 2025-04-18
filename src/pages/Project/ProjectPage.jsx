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

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
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

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./APIHOTEL.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./APIHOTEL.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-17-p1'
                  defaultMessage='APIHOTEL is a digital platform designed to optimize hotel management.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-17-p2'
                  defaultMessage='Allowing you to manage maintenance, cleaning, and staff from a single place.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://apihotel-82ne.onrender.com" target="_blank">https://apihotel.com</a>
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
                  {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" /> */}
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
export default Project;