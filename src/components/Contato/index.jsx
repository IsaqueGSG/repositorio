import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import "./index.css"

export default function Contato() {
  return (
    <section className="contato-section">
      <h2>Contato</h2>

      <div className="contato-card">
        <a href="mailto:seuemail@email.com">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a href="https://wa.me/5500000000000" target="_blank">
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

        <a href="https://github.com/seuusuario" target="_blank">
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/seuusuario" target="_blank">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
