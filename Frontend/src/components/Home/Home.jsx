import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Freebook from "../Freebook";
import Footer from "../Footer";

function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
