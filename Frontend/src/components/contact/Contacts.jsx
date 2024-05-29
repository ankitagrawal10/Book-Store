import React from "react";
import Contact from "../Contact";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Contacts() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
