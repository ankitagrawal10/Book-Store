import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/course/Courses";
import Signup from "./components/Signup";
import Contacts from "./components/contact/Contacts";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
