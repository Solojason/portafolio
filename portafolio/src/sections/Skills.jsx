import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {

      category: "Lenguajes de Programación",
      items: [
        "Java",
        "Python",
        "C++",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React JS",
        "JavaScript",
        "CSS",
        "HTML",
        "Bootstrap (Aprendiendo) 🚀",
      ],
    },
    {
      category: "Backend",
      items: ["Laravel", "PHP"],
    },
    {
      category: "Bases de Datos",
      items: ["MySQL", "MongoDB (Aprendiendo) 🚀"],
    },
    {
      category: "Metodologías de Trabajo",
      items: ["Agile (Kanban, Scrum)"],
    },
    {
      category: "Sistemas Operativos",
      items: ["Windows (8, 10, 11)", "macOS"],
    },
    {
      category: "Herramientas de Desarrollo",
      items: ["GitHub", "MySQL Workbench"],
    },
    {
      category: "Diseño y Documentación",
      items: ["Figma", "Draw.io"],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">🛠️ Habilidades</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow-sm p-3 mb-4">
                <h4 className="fw-bold text-center text-primary">{skill.category}</h4>
                <ul className="list-group list-group-flush">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="list-group-item text-center">
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
