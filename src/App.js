import React from "react";
import AppRouter from "./routers/AppRouter";
// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";

const JournalApp = () => {
   document.title = "Alexander Cuesta";

   return (
      <>
         <AppRouter />
      </>
   );
};

export default JournalApp;
