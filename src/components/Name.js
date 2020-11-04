import React from "react";
import { Link } from "react-router-dom";

const Name = () => {
   return (
      <div className="name">
         {/* Hello */}
         <p>Hola!</p>
         <h1>
            Soy <font color="#17d1ac">Alexander</font> Cuesta
         </h1>
         <p className="name__details">
            Soy un desarrollador web Full Stack egresado de Henry con
            experiencia en desarrollo de aplicaciones de la mano de React y
            Node.
         </p>
         <Link to="#" className="name__cv-btn">
            Download Cv
         </Link>
      </div>
   );
};

export default Name;
