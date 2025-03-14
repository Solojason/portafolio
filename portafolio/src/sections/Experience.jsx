import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      company: "PLayer Group",
      role: "Ingeniero IT",
      period: "2024 - Presente",
      description: "Resolución de problemas IT, gestión de servidores y soporte a usuarios.",
    },
    {
      company: "Sonda México",
      role: "Agente de Service Desk",
      period: "2021 - 2024",
      description: "Soporte técnico a usuarios, resolución de incidencias y gestión de tickets.",
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
        <h2 className="fw-bold text-center text-primary mb-4">Experiencia Profesional</h2>

        {/* Contenedor animado para las tarjetas */}
        <motion.div
          className="row justify-content-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="card shadow mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">{job.role} - <span className="text-primary">{job.company}</span></h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.period}</h6>
                  <p className="card-text">{job.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
