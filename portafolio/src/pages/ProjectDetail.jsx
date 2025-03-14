import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import andersonImg from "../assets/projects/andersen/Anderson.png";
import anderson1Img from "../assets/projects/andersen/INICIO DE SESION.png";
import anderson2Img from "../assets/projects/andersen/REGISTRO.png";
import anderson3Img from "../assets/projects/andersen/PERFIL.png";
import anderson4Img from "../assets/projects/andersen/CRUD.png";
import ccegytImg from "../assets/projects/ccegyt/CCEGYT.png";
import ccegytImg1 from "../assets/projects/ccegyt/CCEGYT_1.png";
import ccegytImg2 from "../assets/projects/ccegyt/CCEGYT_2.png";
import ccegytImg3 from "../assets/projects/ccegyt/CCEGYT_3.png";
import ccegytImg4 from "../assets/projects/ccegyt/CCEGYT_4.png";
import ccegytImg5 from "../assets/projects/ccegyt/CCEGYT_5.png";
import ccegytImg6 from "../assets/projects/ccegyt/CCEGYT_6.png";
import ccegytImg7 from "../assets/projects/ccegyt/CCEGYT_7.png";
import ccegytImg8 from "../assets/projects/ccegyt/CCEGYT_8.png";
import ccegytImg9 from "../assets/projects/ccegyt/CCEGYT_9.png";
import jlcodedevImg from "../assets/projects/jlcodedev/JLCodedev.png";
import jlcodedev1Img from "../assets/projects/jlcodedev/JLCodedev_1.png";
import jlcodedev2Img from "../assets/projects/jlcodedev/JLCodedev_2.png";
import jlcodedev3Img from "../assets/projects/jlcodedev/JLCodedev_3.png";
import jlcodedev4Img from "../assets/projects/jlcodedev/JLCodedev_4.png";
import jlcodedev5Img from "../assets/projects/jlcodedev/JLCodedev_5.png";

// 📌 Datos de los proyectos con imágenes y descripciones detalladas
const projects = {
  "instituto-andersen": { 
    title: "Instituto Andersen", 
    images: [andersonImg, anderson1Img, anderson2Img, anderson3Img, anderson4Img], 
    description: (
      <>
        <h3 className="fw-bold text-primary mt-4">Descripción del Proyecto</h3>
            <p>
            Desarrollamos una <strong>plataforma de gestión integral</strong> para el Instituto Andersen, 
            optimizando la administración de eventos, usuarios y procesos clave.  
            Este sistema permite a la institución <strong>automatizar tareas administrativas, mejorar la accesibilidad a la información</strong> 
            y garantizar un entorno digital seguro y eficiente. 🎉  
            </p>

            <h4 className="fw-bold text-primary mt-4">🚀 Funcionalidades Implementadas</h4>
            <ul>
            <li><strong>Autenticación Segura:</strong> Inicio de sesión y registro con control de accesos basado en roles.</li>
            <li><strong>Gestión de Eventos:</strong> Creación, edición y eliminación de eventos con sistema de inscripción de usuarios.</li>
            <li><strong>Administración de Usuarios y Roles:</strong> Sistema <strong>CRUD</strong> para gestionar permisos y accesos personalizados.</li>
            <li><strong>Exportación de Datos:</strong> Generación de reportes en <strong>PDF</strong> sobre usuarios, eventos y actividades.</li>
            <li><strong>Perfil de Usuario:</strong> Configuración personalizada, actualización de datos y cambio de contraseña. 🔐</li>
            </ul>

            <h4 className="fw-bold text-primary mt-4">🎯 Beneficios Obtenidos</h4>
            <ul>
            <li>🔹 <strong>Automatización de Procesos:</strong> Reducción del tiempo en tareas administrativas.</li>
            <li>🔹 <strong>Mayor Seguridad y Control:</strong> Implementación de <strong>roles y permisos</strong> para gestionar accesos.</li>
            <li>🔹 <strong>Acceso Rápido y Eficiente:</strong> Centralización de la información en una interfaz intuitiva.</li>
            <li>🔹 <strong>Generación de Reportes Personalizados:</strong> Exportación de datos en <strong>PDF</strong> para análisis institucional.</li>
            <li>🔹 <strong>Optimización del Rendimiento:</strong> Implementación con <strong>React JS</strong> para una experiencia fluida.</li>
            </ul>

            <h4 className="fw-bold text-primary mt-4">🛠️ Tecnologías Utilizadas</h4>
            <ul>
            <li><strong>Frontend:</strong> React JS + Bootstrap para una interfaz dinámica y responsiva.</li>
            <li><strong>Backend:</strong> Laravel con MySQL para una arquitectura robusta y escalable.</li>
            <li><strong>Seguridad:</strong> Gestión de roles y permisos con <strong>Spatie</strong>.</li>
            <li><strong>Reportes:</strong> Generación automatizada de <strong>PDFs</strong> con bibliotecas especializadas.</li>
            <li><strong>Despliegue:</strong> Implementado en un servidor optimizado para alto rendimiento.</li>
            </ul>
      </>
    ),
    technologies: ["React", "Laravel", "MySQL", "Bootstrap"],
  },
  "instituto-ccegyt": { 
    title: "Instituto CCEGYT", 
    images: [ccegytImg, ccegytImg1, ccegytImg2, ccegytImg3, ccegytImg4, ccegytImg5, ccegytImg6, ccegytImg7, ccegytImg8, ccegytImg9],
    description: (
        <>
          <h3 className="fw-bold text-primary mt-4">Descripción del Proyecto</h3>
            <p>
            Este proyecto consiste en el desarrollo de una página web moderna para <strong>CCEGYT</strong>, una institución educativa especializada en el área de la salud.  
            La web incluye secciones clave como <strong>Inicio, Sobre Nosotros, Oferta Educativa y Contacto</strong>, proporcionando una experiencia clara y profesional para los usuarios.  
            Además, se implementaron estrategias de <strong>SEO</strong> para mejorar la visibilidad del instituto en los motores de búsqueda y facilitar el acceso a información clave. 🌐
            </p>

            <h4 className="fw-bold text-primary mt-4">🚀 Funcionalidades Implementadas</h4>
            <ul>
            <li><strong>Home / Inicio:</strong> Página principal con introducción a la oferta educativa, noticias, eventos destacados y testimonios de graduados.</li>
            <li><strong>Sobre Nosotros:</strong> Sección detallada con la <strong>Misión, Visión y Valores</strong> del instituto.</li>
            <li><strong>Oferta Educativa:</strong> Listado completo de <strong>Licenciaturas, Cursos y Diplomados</strong> con información detallada.</li>
            <li><strong>Contacto:</strong> Información de ubicación, correo, teléfonos de contacto y un enlace directo a <strong>WhatsApp</strong> para atención personalizada.</li>
            </ul>

            <h4 className="fw-bold text-primary mt-4">🎯 Beneficios Obtenidos</h4>
            <ul>
            <li>🔹 <strong>Mayor visibilidad en línea:</strong> Implementación de técnicas de <strong>SEO</strong> para mejorar el posicionamiento en Google.</li>
            <li>🔹 <strong>Mejora en la experiencia del usuario (UX):</strong> Diseño intuitivo y navegación optimizada para facilitar el acceso a la información.</li>
            <li>🔹 <strong>Optimización del rendimiento:</strong> Desarrollo con <strong>React JS</strong> para garantizar una experiencia rápida y fluida.</li>
            <li>🔹 <strong>Accesibilidad multiplataforma:</strong> Diseño <strong>responsive</strong> adaptado a dispositivos móviles, tablets y computadoras.</li>
            <li>🔹 <strong>Mayor interacción con los usuarios:</strong> Integración de formularios de contacto y enlaces a redes sociales.</li>
            </ul>

            <h4 className="fw-bold text-primary mt-4">🛠️ Tecnologías Utilizadas</h4>
            <ul>
            <li><strong>Frontend:</strong> React JS y CSS para una interfaz moderna y dinámica.</li>
            <li><strong>SEO:</strong> Optimización con etiquetas meta, estructura semántica y estrategias de indexación.</li>
            <li><strong>Integraciones:</strong> Enlace directo a WhatsApp y formularios de contacto dinámicos.</li>
            <li><strong>Despliegue:</strong> Hosting optimizado en Hostinger para una carga rápida y eficiente.</li>
            </ul>
        </>
      ),
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  "jl-codedev": {
  title: "JL CodeDev",
  images: [jlcodedevImg, jlcodedev1Img, jlcodedev2Img, jlcodedev3Img, jlcodedev4Img, jlcodedev5Img],
  description: (
    <>
      <h3 className="fw-bold text-primary mt-4">Descripción del Proyecto</h3>
      <p>
        Desarrollamos el sitio web de <strong>JL CodeDev</strong>, una consultora especializada en servicios de desarrollo web, diseño y soporte técnico. El objetivo principal fue crear una plataforma en línea que reflejara la profesionalidad de la empresa y facilitara la interacción con potenciales clientes.
      </p>

      <h4 className="fw-bold text-primary mt-4">🚀 Funcionalidades Implementadas</h4>
      <ul>
        <li><strong>Chatbot Integrado:</strong> Implementación de un chatbot con <strong>TIDIO</strong> para atención inmediata a los visitantes.</li>
        <li><strong>Demo de Inicio de Sesión:</strong> Sección interactiva que muestra un ejemplo funcional de inicio de sesión para demostrar nuestras capacidades en desarrollo de interfaces seguras.</li>
        <li><strong>Formulario de Contacto:</strong> Formulario funcional alojado en <strong>EmailJS</strong> que permite a los usuarios comunicarse directamente con nosotros.</li>
        <li><strong>Diseño Responsivo:</strong> Adaptación completa del sitio para una visualización óptima en dispositivos móviles, tabletas y computadoras de escritorio.</li>
      </ul>

      <h4 className="fw-bold text-primary mt-4">🎯 Beneficios Obtenidos</h4>
      <ul>
        <li>🔹 <strong>Interacción Inmediata:</strong> El chatbot facilita respuestas rápidas a consultas comunes, mejorando la experiencia del usuario.</li>
        <li>🔹 <strong>Demostración de Capacidades:</strong> La demo de inicio de sesión permite a los clientes potenciales ver ejemplos reales de nuestro trabajo en acción.</li>
        <li>🔹 <strong>Comunicación Eficiente:</strong> El formulario de contacto funcional asegura que las consultas lleguen directamente a nuestro equipo, permitiendo una respuesta oportuna.</li>
        <li>🔹 <strong>Accesibilidad Mejorada:</strong> El diseño responsivo garantiza que el sitio sea accesible y atractivo en cualquier dispositivo, ampliando nuestro alcance a una audiencia más amplia.</li>
      </ul>

      <h4 className="fw-bold text-primary mt-4">🛠️ Tecnologías Utilizadas</h4>
      <ul>
        <li><strong>Frontend:</strong> Desarrollo con <strong>React JS</strong> y <strong>CSS</strong> para una interfaz de usuario dinámica y moderna.</li>
        <li><strong>Chatbot:</strong> Integración de <strong>TIDIO</strong> para soporte en tiempo real.</li>
        <li><strong>Formulario de Contacto:</strong> Implementación mediante <strong>EmailJS</strong> para la gestión eficiente de mensajes.</li>
        <li><strong>Diseño Responsivo:</strong> Uso de técnicas de diseño adaptable para asegurar compatibilidad con diversos dispositivos y tamaños de pantalla.</li>
      </ul>
    </>
  ),
  technologies: ["React", "CSS", "TIDIO", "EmailJS"],
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
