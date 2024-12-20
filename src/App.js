import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import NotFound from './Components/NotFound';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
