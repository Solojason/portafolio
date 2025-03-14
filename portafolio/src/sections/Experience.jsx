import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      company: "Player Group",
      role: "Ingeniero TI",
      period: "Septiembre 2024 - Presente",
      description: [
        "Soporte y personalización de equipos (Windows, macOS, tablets e impresoras).",
        "Gestión de seguridad con backups en OneDrive y monitoreo de red UNIFI.",
        "Administración de Office 365 y Google Workspace.",
      ],
    },
    {
      company: "Sonda México (Scotiabank)",
      role: "Agente de Service Desk 1B",
      period: "Abril 2021 - Septiembre 2024",
      description: [
        "Gestión de incidencias y soporte remoto con ServiceNow.",
        "Instalación y solución de problemas en Microsoft Office y software corporativo.",
        "Soporte a usuarios corporativos y sucursales bancarias.",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">💼 Experiencia Profesional</h2>
        <div className="row justify-content-center">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{job.role} - <span className="text-primary">{job.company}</span></h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.period}</h6>
                  <ul className="list-unstyled">
                    {job.description.map((task, idx) => (
                      <li key={idx}>✅ {task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}