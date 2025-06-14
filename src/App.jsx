import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import Projects from "./pages/ProjectsPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </Router>
  );
}

export default App;
