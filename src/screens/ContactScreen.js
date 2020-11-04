import React, { useState } from "react";

const ContactScreen = () => {
   const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(form);
   };

   const handleOnChange = ({ target }) => {
      setForm({
         ...form,
         [target.name]: target.value,
      });
   };

   return (
      <section id="contact-form">
         <form onSubmit={handleOnSubmit}>
            <div className="contact-left">
               <h1 className="c-l-heading">
                  <font style={{ borderBottom: "3px solid #1ED98B" }}>
                     Escríbeme
                  </font>
               </h1>

               <div className="f-name">
                  <font>Nombre</font>
                  <input
                     name="name"
                     onChange={handleOnChange}
                     type="text"
                     placeholder="Nombre completo"
                  />
               </div>

               <div className="f-email">
                  <font>Email</font>
                  <input
                     name="email"
                     onChange={handleOnChange}
                     type="email"
                     placeholder="Example@gmail.com"
                  />
               </div>
            </div>

            <div className="contact-right">
               <div className="message">
                  <font>Mensaje</font>
                  <textarea
                     name="message"
                     rows="5"
                     cols="20"
                     placeholder="Escribe tu mensaje ..."
                     onChange={handleOnChange}
                  ></textarea>
               </div>

               <button type="submit">enviar</button>
            </div>
         </form>
      </section>
   );
};

export default ContactScreen;
