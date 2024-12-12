import React from "react";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import { Navigate, Route, Routes } from "react-router";
import Signup from "./components/Signup";
import Contact from "./components/Contact/Contact";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Course />:<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
