import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(""); // Estado para mostrar el mensaje de éxito/error
  const [loading, setLoading] = useState(false); // Estado para mostrar el loader mientras se envía el formulario

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar loading

    // 🚀 Envío del formulario con FormSubmit (opción gratuita)
    const formEndpoint = "https://formsubmit.co/jasonrojasjimenez@gmail.com"; // Reemplázalo con tu email
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormStatus("✅ ¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto. 🚀");
        setFormData({ name: "", email: "", message: "" }); // Reiniciar el formulario
      } else {
        setFormStatus("❌ Ocurrió un error al enviar tu mensaje. Inténtalo nuevamente.");
      }
    } catch (error) {
      setFormStatus("❌ Error en la conexión. Verifica tu internet y vuelve a intentarlo.");
    }

    setLoading(false); // Desactivar loading

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setFormStatus(""), 5000);
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                whileHover={{ scale: loading ? 1 : 1.05 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Enviando...
                  </>
                ) : (
                  <>✉️ Enviar Mensaje</>
                )}
              </motion.button>
            </form>

            {/* Mensaje de confirmación */}
            {formStatus && (
              <div className="alert mt-3 text-center" role="alert">
                {formStatus}
              </div>
            )}
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-center mt-4">
          <h4 className="fw-bold">🌐 También puedes contactarme en:</h4>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="https://www.linkedin.com/in/jason-rojas-jimenez-b68aa9231/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/Solojason" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              🐙 GitHub
            </a>
            <a href="mailto:jasonrojasjimenez@gmail.com" className="btn btn-outline-danger">
              📧 Email
            </a>
            {/* WhatsApp opcional */}
            <a href="https://wa.me/525573522640" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
