import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EducationCert from "./pages/EducationCert";
import ProjectExp from "./pages/Project_exp";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/education_and_certifications"
          element={
            <>
              <EducationCert /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/projects_and_experiences"
          element={
            <>
              <ProjectExp /> <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
