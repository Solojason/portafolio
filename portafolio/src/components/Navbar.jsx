import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  // Diccionario para traducir las secciones
  const sections = {
    home: "Inicio",
    about: "Sobre Mí",
    projects: "Proyectos",
    skills: "Habilidades",
    experience: "Experiencia",
    contact: "Contacto",
  };

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => sectionElements.forEach((section) => observer.unobserve(section));
  }, []);

  // 📌 Función para manejar la navegación y el scroll a secciones
  const handleNavigate = (sectionId) => {
    if (window.location.pathname === "/") {
      // Si ya estamos en la página principal, solo hacer scroll con un offset
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; // Ajusta el valor según la altura del navbar
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, ir primero a "/" y luego hacer scroll con offset
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 80; // Mismo ajuste para evitar que se oculte
          const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <button
          className="navbar-brand btn btn-link text-white text-decoration-none"
          onClick={() => handleNavigate("home")}
        >
          Mi Portafolio
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {Object.entries(sections).map(([key, value]) => (
              <li key={key} className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white text-decoration-none ${activeSection === key ? "active-link" : ""}`}
                  onClick={() => handleNavigate(key)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
