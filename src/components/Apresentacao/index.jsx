import "./index.css";

export default function Projetos({goTo}) {

  return (
    <section className="apresentacao-section">

      <div>

      <span className="badge">Sobre mim</span>

      <h1>
        Olá, eu sou <span>Isaque</span>
      </h1>

      <h2>
        Desenvolvedor em formação apaixonado por tecnologia
      </h2>

      <p>
        Sou estudante de Engenharia da Computação, com experiência em suporte técnico
        e liderança de equipes. Atualmente foco no desenvolvimento de aplicações
        modernas utilizando React, Firebase e boas práticas de UI/UX.
      </p>

      <div className="apresentacao-actions">
        <button className="primary" onClick={()=>goTo(1)} >Minha trajetória</button>
        <button className="secondary" onClick={()=>goTo(3)}>Contato</button>
      </div>
      </div>

    </section>
  )
}


