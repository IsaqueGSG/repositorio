import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./index.css"

const projetos = [
  {
    descricao: "App de agendamento com gestão de horários, clientes e lucros.",
    github: "https://github.com/IsaqueGSG/app-react-agendamentos",
    demo: "https://agendarapida.web.app/inicio"
  },
  {
    descricao: "App para professores da materia de calculo do IFSP.",
    github: "https://github.com/IsaqueGSG/plot3d",
    demo: "https://plot3d.web.app/"
  },
  {
    descricao: "App para professores da materia de calculo do IFSP.",
    github: "https://github.com/IsaqueGSG/plot3d",
    demo: "https://plot3d.web.app/"
  }
]

export default function Projetos() {
  return (
    <section className="projetos-section">
      <h2>Projetos</h2>

      <div className="projetos-grid">
        {projetos.map((p, index) => (
          <div className="projeto-card" key={index}>
            <p>{p.descricao}</p>

            <div className="projeto-links">
              <a href={p.github} target="_blank">
                <FaGithub /> Código
              </a>
              <a href={p.demo} target="_blank">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
