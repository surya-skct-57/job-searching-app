import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assests/css/App.css";
import CandidateLoginForm from "./components/CandidateLoginForm/CandidateLoginForm";
import EmployerLoginForm from "./components/EmployerLoginForm/EmployerLoginForm";
import MergePages from "./components/Merge/MergePages";
import Navigation from "./components/Navbar/Navigation";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import AboutMerge from "./components/AboutMerge/AboutMerge";
import ContactUs from "./components/Contact/ContactForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MergePages />} />
        <Route path="/candidate-login" element={<CandidateLoginForm />} />
        <Route path="/employee-login" element={<EmployerLoginForm />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/about" element={<AboutMerge />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/application" element={<ApplicationForm />} />
      
      </Routes>
    </div>
  );
}

export default App;
