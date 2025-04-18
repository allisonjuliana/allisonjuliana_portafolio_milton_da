import React from 'react';
import './ServicesPage.css';

/* Component */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage
              id='services'
              defaultMessage='Services'
            />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-drafting-compass"></i>
              <h3>
                <FormattedMessage
                  id='design'
                  defaultMessage='ADesign UX/UIboult me'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='design-info'
                  defaultMessage='Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id='development'
                  defaultMessage='Web development'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='development-info'
                  defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-chart-line"></i>
              <h3>
                <FormattedMessage
                  id='marketing'
                  defaultMessage='Digital marketing'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='marketing-info'
                  defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage
                  id='maintenance'
                  defaultMessage='Web maintenance'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='maintenance-info'
                  defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-search"></i>
              <h3>
                <FormattedMessage
                  id='seo'
                  defaultMessage='Web positioning (SEO)'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='seo-info'
                  defaultMessage='Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-tachometer-alt"></i>
              <h3>
                <FormattedMessage
                  id='optimization'
                  defaultMessage='Website optimization'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='optimization-info'
                  defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                />
              </p>
            </div>
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequent questions'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='What is a responsive web page?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='It is that page that is capable of adapting to any device where it is viewed, such as cell phones, tablets, laptops, without losing appearance or usability.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='What is a Domain and a Hosting?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage='Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='Is monthly maintenance necessary?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='Regular maintenance of your website allows you to attract and retain customers with new information, new products and services, in addition to helping you maintain or improve your ranking in Google.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-4'
                defaultMessage='How to pay'
              />}
              content={<FormattedMessage
                id='services-questions-p4'
                defaultMessage='You can pay online by credit or debit cards and payments by transfers.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
export default Services;