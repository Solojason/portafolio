import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/JasonR.png";

export default function About() {
  const navigate = useNavigate();

  // 📌 Función para navegar a la sección de contacto correctamente
  const handleGoToContact = () => {
    if (window.location.pathname === "/") {
      // Si ya estamos en la página principal, solo hacer scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const offset = 80; // Ajuste por el navbar fijo
        const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, ir primero a "/" y luego hacer scroll
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const offset = 80;
          const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 600);
    }
  };

  return (
    <motion.section
      id="about"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen con animación */}
          <motion.div
            className="col-lg-5 text-center mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={profileImg}
              alt="Perfil Jason Rojas"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "300px" }}
            />
          </motion.div>

          {/* Información sobre mí */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold text-primary">Sobre Mí</h2>
            <p className="lead text-muted">
              🎓 <span className="fw-bold">Ingeniero en Sistemas Computacionales</span> con enfoque en{" "}
              <span className="fw-bold">desarrollo web e infraestructura IT</span>. Apasionado por la tecnología, la mejora de procesos y la optimización de sistemas.
            </p>
            <p>
              💻 Experiencia en <span className="fw-bold">React JS, Laravel, JavaScript, Python y MySQL</span>. 
              Implementación de <span className="fw-bold">soluciones IT</span> en entornos empresariales y corporativos.
            </p>
            <p>
              📊 Capacidad para administrar <span className="fw-bold">infraestructura IT</span>, soporte a usuarios y automatización de procesos.
              Enfoque en <span className="fw-bold">eficiencia operativa y seguridad informática</span>.
            </p>

            {/* Sección de Educación */}
            {/*<h4 className="fw-bold text-secondary mt-4">🎓 Educación</h4>
            <ul className="list-unstyled">
              <li><span className="fw-bold">Universidad Tres Culturas</span> - Ingeniería en Sistemas Computacionales</li>
              <li>🛠 Cursos de especialización en Desarrollo Web, Análisis de Datos y Programación Orientada a Objetos.</li>
            </ul>*/}

            {/* Botón para Contacto usando navigate() */}
            <div className="mt-4 text-center text-lg-start">
              <motion.button
                className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
                whileHover={{ scale: 1.1 }}
                onClick={handleGoToContact}
              >
                📱 Contáctame
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
