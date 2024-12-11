import React from "react";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import { Route, Routes } from "react-router";
import Signup from "./components/Signup";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
