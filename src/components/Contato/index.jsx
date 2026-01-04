import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import "./index.css"

export default function Contato() {
  return (
    <section className="contato-section">
      <h2>Contato</h2>

      <div className="contato-card">
        <a href="isaquegsgoncalves@gmail.com">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a href="https://github.com/isaqueGSG" target="_blank">
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/isaquegsgon%C3%A7alves/" target="_blank">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
