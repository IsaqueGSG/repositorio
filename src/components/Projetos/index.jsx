import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import "./index.css"

const projetos = [
  {
    titulo: "Sistema de Agendamentos",
    descricao: "Aplicação para profissionais autônomos com gestão de horários, clientes e lucros.",
    github: "#",
    demo: "#"
  },
  {
    titulo: "Calculadora de Cálculo",
    descricao: "Calculadora visual com gráficos 2D e 3D usando React e Plotly.",
    github: "#",
    demo: "#"
  }
]

export default function Projetos() {
  return (
    <section className="projetos-section">
      <h2>Projetos</h2>

      <div className="projetos-grid">
        {projetos.map((p, index) => (
          <div className="projeto-card" key={index}>
            <h3>{p.titulo}</h3>
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
