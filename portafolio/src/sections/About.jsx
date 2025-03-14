import { motion } from "framer-motion";
import JasonR from "../assets/images/JasonR.png";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen con animación de entrada desde la izquierda */}
          <motion.div
            className="col-lg-5 text-center mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={JasonR}
              alt="Perfil"
              className="img-fluid rounded-circle shadow"
              loading="lazy"
            />
          </motion.div>

          {/* Texto con animación de entrada desde la derecha */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold text-primary">Sobre Mí</h2>
            <p className="lead">
              Soy un <strong>Desarrollador Junior & IT Specialist</strong> apasionado por la tecnología y la resolución de problemas.
              Mi experiencia en soporte técnico me ha permitido desarrollar habilidades de análisis y mejora continua.
            </p>
            <p>
              Me encanta aprender nuevas tecnologías y mejorar constantemente mis habilidades en desarrollo web y gestión de IT.
            </p>

            {/* Botón con animación de escala al hacer hover */}
            <motion.a
              href="#contact"
              className="btn btn-outline-primary"
              whileHover={{ scale: 1.1 }}
            >
              Contáctame
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

  