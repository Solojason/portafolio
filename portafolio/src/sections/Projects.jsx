import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import andersonImg from "../assets/projects/andersen/Anderson.png";
import ccegytImg from "../assets/projects/ccegyt/CCEGYT.png";
import jlcodedevImg from "../assets/projects/jlcodedev/JLCodeDev.png";

export default function Projects() {
  const projects = [
    { title: "Instituto Andersen", img: andersonImg, id: "instituto-andersen" },
    { title: "Instituto CCEGYT", img: ccegytImg, id: "instituto-ccegyt" },
    { title: "JL CodeDev", img: jlcodedevImg, id: "jl-codedev" },
  ];

  return (
    <motion.section
      id="projects"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">Proyectos</h2>

        {/* Contenedor animado para las tarjetas */}
        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="card shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.img} className="card-img-top" alt={project.title} loading="lazy" />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>

                  {/* Redirección con React Router */}
                  <Link to={`/projects/${project.id}`} className="btn btn-primary">
                    Ver Proyecto
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
