import "./index.css"
import { FaReact, FaJs, FaVuejs, FaNodeJs } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Firebase", icon: <IoLogoFirebase /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Node.js", icon: <FaNodeJs /> }
]

export default function Habilidades() {
  return (
    <section className="skills-section">

      <div className="container-habilidades">

        <h2 className="skills-title"> <span> Skills </span> & Experiencias</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
