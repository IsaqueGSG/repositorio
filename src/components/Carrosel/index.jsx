import { useState, useEffect } from "react"
import "./index.css"

import arrastaImg from "../../assets/arrasta3.webp";

const data = [
  {
    titulo: "Linha do tempo",
    items: [
      {
        title: "Arraste para os lados",
        conteudo: <img
          src={arrastaImg}
          alt="Arraste para os lados"
          className="img-arrasta"
        />
        ,
        type: "tag"
      }
    ],
  },
  {
    titulo: "2021",
    items: [
      {
        title: "Tecnólogo em Analise e Desenvolvimento de Sistemas",
        conteudo: "Ingressei na area de TI com o curso de ADS na Faculdade Eniac usando o Prouni.",
        type: "text"
      }
    ]
  },
  {
    titulo: "2022",
    items: [
      {
        title: "Primeiro estágio na área de TI",
        conteudo: "Estágio como Suporte Técnico na Amecred.",
        type: "text"
      }
    ]
  },
  {
    titulo: "2023",
    items: [
      {
        title: "Experiencia profissional como Líder de equipe",
        conteudo: "Liderei o time de suporte técnico na Faculdade Unifesp.",
        type: "text"
      },
      {
        title: "Conclusão do Tecnólogo em Análise e Desenvolvimento de Sistemas",
        conteudo: "Encerramento do curso e colação de grau.",
        type: "text"
      },
      {
        title: "Segunda realização Enem",
        conteudo: "Sem grande expectativas realizei o enem para incentivo de pessoas proximas.",
        type: "text"
      }
    ]
  },
  {
    titulo: "2024",
    items: [
      {
        title: "Bacharelado em Engenharia da Computação",
        conteudo: "ingressei no curso de Engenharia da Computação do Instituto Federal de SP usando o SISU.",
        type: "text"
      }
    ]
  }
]

export default function Carrosel({ sessaoEmFoco, indexDaSessao }) {
  const emFoco = sessaoEmFoco === indexDaSessao

  const [active, setActive] = useState(0)

  const progressWidth = (active / (data.length - 1)) * 100

  const next = () => {
    if (active < data.length - 1) setActive(active + 1)
  }

  const prev = () => {
    if (active > 0) setActive(active - 1)
  }

  const [touchStartX, setTouchStartX] = useState(null)
  const [touchStartY, setTouchStartY] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)

  const minSwipeDistance = 50


  const onTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
    setTouchEndX(null)
  }

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (e) => {
    if (touchStartX === null || touchEndX === null) return

    const deltaX = touchStartX - touchEndX
    const deltaY = touchStartY - e.changedTouches[0].clientY

    // Só dispara se for claramente horizontal
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      deltaX > 0 ? next() : prev()
    }
  }

  useEffect(() => {
    if (!emFoco) return

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [emFoco, active])


  return (
    <section className="carrosel-section">


      <h1>
        Olá, me chamo <span>Isaque</span>
      </h1>

      {/* ===== CARROSSEL ===== */}
      <div className="carousel">
        <div
          className="carousel-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {data.map((card, index) => (
              <div className="card" key={index}>
                <h2>{card.titulo}</h2>

                {card.items.map((item, i) => (
                  <div key={i} className="card-content">
                    <h4>* {item.title}</h4>
                    {
                      item.conteudo === "type"
                        ? <p>{item.conteudo}</p>
                        : item.conteudo
                    }

                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="progress-line">
          <div
            className="progress-fill"
            style={{ width: `${(active / (data.length - 1)) * 100}%` }}
          />
        </div>
        <div className="containerBtnNav">
          <button onClick={prev} disabled={active === 0}>❮</button>
          <button onClick={next} disabled={active === data.length - 1}>❯</button>
        </div>

      </div>

    </section>
  )
}
