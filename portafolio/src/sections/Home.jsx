import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cvEs from "../assets/docs/Jason-Rojas-CV-ES.pdf";
import cvEn from "../assets/docs/Jason-Rojas-CV-EN.pdf";

export default function Home() {
  const navigate = useNavigate();

  // 📌 Función para ir a "Proyectos" correctamente
  const handleGoToProjects = () => {
    if (window.location.pathname === "/") {
      // Si ya estamos en la página principal, solo hacer scroll
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const offset = 80; // Ajustar según altura del navbar
        const sectionPosition = projectsSection.getBoundingClientRect().top + window.scrollY - offset;
        projectsSection.scrollIntoView({ top: sectionPosition, behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, ir primero a "/" y luego hacer scroll
      navigate("/");
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const offset = 80;
          const sectionPosition = projectsSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <motion.section
      id="home"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container text-center">
        {/* Título llamativo */}
        <h1 className="display-3 fw-bold">
          ¡Hola, soy <span className="text-primary">Jason Rojas</span>! 👋
        </h1>
        
        {/* Breve descripción */}
        <p className="lead text-muted">
          Ingeniero en Sistemas | Desarrollador Web | IT Specialist <br />
          Apasionado por la tecnología, la optimización de procesos y el desarrollo.
        </p>
        
        {/* Contenedor Flexbox para espaciar los botones */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          {/* Botón de Ver Proyectos con navegación inteligente */}
          <motion.button 
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.1 }}
            onClick={handleGoToProjects}
          >
            🚀 Ver mis Proyectos
          </motion.button>

          {/* Botón con menú desplegable para elegir el CV */}
          <div className="dropdown">
            <motion.button 
              className="btn btn-outline-primary btn-lg dropdown-toggle"
              type="button"
              id="dropdownCV"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              whileHover={{ scale: 1.1 }}
            >
              📄 Descargar CV
            </motion.button>
            <ul className="dropdown-menu" aria-labelledby="dropdownCV">
              <li><a className="dropdown-item" href={cvEs} download>📄 🇪🇸 Español</a></li>
              <li><a className="dropdown-item" href={cvEn} download>📄 🇺🇸 English</a></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
