import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import andersonImg from "../assets/projects/Anderson.png";
import ccegytImg from "../assets/projects/CCEGYT.png";
import jlcodedevImg from "../assets/projects/JLCodedev.png";

// 📌 Datos de los proyectos con imágenes y descripciones detalladas
const projects = {
  "instituto-andersen": { 
    title: "Instituto Andersen", 
    images: [andersonImg, andersonImg, andersonImg, andersonImg], 
    description: (
      <>
        <h3 className="fw-bold text-primary mt-4">Descripción del Proyecto</h3>
        <p>
          Colaboramos con el Instituto Andersen para desarrollar una plataforma de gestión integral
          que facilita la administración de eventos, usuarios y otros procesos esenciales del instituto.
          El sistema fue diseñado para optimizar la gestión interna, mejorar la accesibilidad a la información 
          y simplificar la administración de actividades diarias a través de un entorno digital seguro y eficiente. 🎉
        </p>

        <h4 className="fw-bold text-primary mt-4">🚀 Funcionalidades Implementadas</h4>
        <ul>
          <li><strong>Inicio de Sesión y Registro:</strong> Implementación de autenticación segura.</li>
          <li><strong>Gestión de Eventos:</strong> CRUD de eventos con inscripción de usuarios y resultados.</li>
          <li><strong>Gestión de Usuarios y Roles:</strong> CRUD con permisos personalizados.</li>
          <li><strong>Exportación de Datos a PDF:</strong> Generación de reportes sobre usuarios y eventos.</li>
          <li><strong>Perfil de Usuario y Cambio de Contraseña:</strong> Seguridad y personalización de perfiles. 🔐</li>
        </ul>

        <h4 className="fw-bold text-primary mt-4">🎯 Beneficios Obtenidos</h4>
        <ul>
          <li>🔹 Optimización del tiempo de administración.</li>
          <li>🔹 Seguridad y control de acceso.</li>
          <li>🔹 Facilidad de acceso a información y reportes.</li>
        </ul>

        <h4 className="fw-bold text-primary mt-4">🛠️ Tecnologías Utilizadas</h4>
        <ul>
          <li>Frameworks: Laravel para backend, React para frontend.</li>
          <li>Base de Datos: MySQL.</li>
          <li>Autenticación y Seguridad: Implementación de Spatie para roles y permisos.</li>
          <li>Generación de Reportes: Exportación a PDF con bibliotecas especializadas.</li>
        </ul>
      </>
    ),
    technologies: ["React", "Laravel", "MySQL", "Bootstrap"],
  },
  "instituto-ccegyt": { 
    title: "Instituto CCEGYT", 
    images: [ccegytImg, ccegytImg, ccegytImg, ccegytImg],
    description: "Página web diseñada para mejorar la visibilidad del Instituto CCEGYT.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  "jl-codedev": { 
    title: "JL CodeDev", 
    images: [jlcodedevImg, jlcodedevImg, jlcodedevImg, jlcodedevImg],
    description: "Un portafolio web profesional para JL CodeDev, destacando proyectos y habilidades.",
    technologies: ["React", "Framer Motion", "Bootstrap"],
  }
};

export default function ProjectDetail() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects[projectId];

    const [currentImage, setCurrentImage] = useState(0);

    if (!project) {
      return <h2 className="text-center mt-5">Proyecto no encontrado</h2>;
    }

    // 📌 SOLUCIÓN: Hacer el scroll más suave con un pequeño retraso
    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 600); // ⏳ Esperamos 600ms antes de hacer scroll
    }, [projectId]);

    // 📌 Función para regresar a "Proyectos" y hacer scroll correctamente
    const handleGoToProjects = () => {
      navigate("/"); // Regresa a la página principal

      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const offset = 80; // Ajuste por el navbar fijo
          const sectionPosition = projectsSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 600); // ⏳ Ahora también esperamos 600ms antes de hacer scroll
    };

    return (
      <motion.div 
        className="container py-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Botón Fijo en la Izquierda */}
        <div style={{ position: "fixed", left: "20px", top: "15%", transform: "translateY(-50%)", zIndex: 1000 }}>
          <button onClick={handleGoToProjects} className="btn btn-secondary">
            ← Volver a Proyectos
          </button>
        </div>

        <h1 className="fw-bold text-primary mt-4">{project.title}</h1>

        {/* Contenedor de la imagen con animación */}
        <motion.div 
          className="text-center mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={project.images[currentImage]} 
            alt={project.title} 
            className="img-fluid mb-3 rounded shadow" 
            style={{ maxWidth: "600px", height: "auto" }} 
          />
        </motion.div>

        {/* Navegación entre imágenes si hay más de una */}
        {project.images.length > 1 && (
          <div className="text-center mb-4">
            <button 
              className="btn btn-outline-primary me-2"
              onClick={() => setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
            >
              ← Anterior
            </button>
            <button 
              className="btn btn-outline-primary"
              onClick={() => setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
            >
              Siguiente →
            </button>
          </div>
        )}

        {/* Descripción completa del proyecto */}
        <div className="text-start mt-4">{project.description}</div>
      </motion.div>
    );
}
