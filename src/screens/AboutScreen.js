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
         </div>

         <div className="about__model">
            <img alt="model" src="/images/about-model.png" />
         </div>
      </section>
   );
};

export default AboutScreen;
