import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar">
         {/* Logo */}
         <Link to="a" className="navbar__logo">
            MI PORTAFOLIO
         </Link>
         {/* Menu */}
         <ul className="navbar__menu">
            <li>
               <NavLink exact to="/" activeClassName="active">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/about" activeClassName="active">
                  About
               </NavLink>
            </li>
            {/* <li>
               <NavLink to="/services" activeClassName="active">
                  Services
               </NavLink>
            </li>
            <li>
               <NavLink to="/portafolio" activeClassName="active">
                  Portafolio
               </NavLink>
            </li> */}
            {/* <li>
               <NavLink to="/contact" activeClassName="active">
                  Contact
               </NavLink>
            </li> */}
         </ul>
      </nav>
   );
};

export default Navbar;
