import React from "react";
import { Link } from "react-router-dom";

const AboutScreen = () => {
   return (
      <section id="about">
         <div className="about__text">
            <h1>Soy un</h1>
            <h2>Full Stack Web Developer</h2>
            <p>
               Apasionado por el conocimiento y entusiasta de la tecnología.
               Tengo experiencia en el desarrollo de aplicaciones web y mobile
               de la mano de Javascript usando React y Native para el Frontend y
               Node para el Backend.
            </p>
            <p>
               Estas son algunas de las teclonologías con las que he trabajado.
            </p>

            <div className="about__tecs">
               <Link to="#">
                  <img src="/images/icons/javascript.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/nodejs-icon.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/react.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/apollo-graphql-compact.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/postgresql.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/redux.svg" alt="" />
               </Link>
               <Link to="#">
                  <img src="/images/icons/sequelize.svg" alt="" />
               </Link>
               {/* <Link to="#">
                  <img src="/images/icons/less.svg" alt="" />
               </Link> */}
               <Link to="#">
                  <img src="/images/icons/node-sass.svg" alt="" />
               </Link>
            </div>
            {/* <button>View More Details</button> */}

            <h2 className="about__contact">Contacto</h2>

            <div className="about__contact-info">
               <Link to="#">
                  <div className="about__info">
                     <img src="/images/icons/gmail.svg" alt="gmail" />
                     <p>pacuestar@gmail.com</p>
                  </div>
               </Link>
               <a
                  href="https://www.linkedin.com/in/pacuestar/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <div className="about__info">
                     <img src="/images/icons/linkedin.svg" alt="linkedin" />
                     <p>/pacuestar</p>
                  </div>
               </a>
               <Link to="#">
                  <div className="about__info">
                     <img src="/images/icons/wp.svg" alt="telefono" />
                     <p>+57 300 264 9626</p>
                  </div>
               </Link>
            </div>
         </div>

         <div className="about__model">
            <img alt="model" src="/images/about-model.png" />
         </div>
      </section>
   );
};

export default AboutScreen;
