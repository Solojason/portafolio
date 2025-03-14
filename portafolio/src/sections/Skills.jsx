import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
    { category: "Backend", items: ["PHP", "Laravel", "MySQL"] },
    { category: "Herramientas IT", items: ["GitHub", "S.O Windows", "S.O mac", "Administrador de Office y Google"] },
  ];

  return (
    <motion.section
      id="skills"
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">Habilidades</h2>

        {/* Contenedor animado para las tarjetas */}
        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="card shadow-sm p-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="fw-bold text-center">{skill.category}</h4>
                <ul className="list-group list-group-flush">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="list-group-item text-center">{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
