import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Mensaje enviado correctamente. ¡Gracias por contactarme!");
    setFormData({ name: "", email: "", message: "" }); // Reiniciar el formulario después del envío
  };

  return (
    <motion.section
      id="contact"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">📩 ¡Contáctame!</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Formulario de Contacto */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  placeholder="Tu Nombre" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  placeholder="tu@email.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  rows="4" 
                  placeholder="Escribe tu mensaje" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.05 }}
              >
                ✉️ Enviar Mensaje
              </motion.button>
            </form>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-center mt-4">
          <h4 className="fw-bold">🌐 También puedes contactarme en:</h4>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="https://www.linkedin.com/in/jasonrojas" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/jasonrojas" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              🐙 GitHub
            </a>
            <a href="mailto:jasonrojas@email.com" className="btn btn-outline-danger">
              📧 Email
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
