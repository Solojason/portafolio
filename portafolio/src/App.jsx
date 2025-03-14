import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página principal con todas las secciones */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </>
        } />

        {/* Página de detalles del proyecto */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
