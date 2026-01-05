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
    descricao: "Leading page para empresa Amecred.",
    github: "",
    demo: "https://amecred.wordpress.com/"
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
              <button
                disabled={!p.github}
                className="btn"
                onClick={() => {
                  if (p.github) {
                    window.open(p.github, "_blank");
                  }
                }}
              >
                <FaGithub /> Git Hub
              </button>

              <button
                disabled={!p.demo}
                className="btn"
                onClick={() => {
                  if (p.demo) {
                    window.open(p.demo, "_blank");
                  }
                }}
              >
                <FaExternalLinkAlt /> Demo
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
