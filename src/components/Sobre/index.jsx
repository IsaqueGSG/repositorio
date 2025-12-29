import { useState, useEffect } from "react"
import "./index.css"

const data = [
  {
    year: "2020",
    items: [
      {
        title: "Ensino Médio Completo",
        text: "Concluí o ensino médio na escola estadual Guilhermino Rodrigues de Lima."
      },
      {
        title: "Primeira Realização Enem",
        text: "Decorrente a pandemia de Covid-19 o enem que deveria ter ocorrido em 2020 foi realizado em 2021."
      }
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Tecnólogo em Analise e Desenvolvimento de Sistemas",
        text: "Ingressei na area de TI com o curso de ADS na Faculdade Eniac usando o Prouni."
      }
    ]
  },
  {
    year: "2022",
    items: [
      {
        title: "Primeiro estágio na área de TI",
        text: "Estágio como Suporte Técnico na Amecred."
      }
    ]
  },
  {
    year: "2023",
    items: [
      {
        title: "Experiencia profissional como Líder de equipe",
        text: "Liderei o time de suporte técnico na Faculdade Unifesp."
      },
      {
        title: "Conclusão do Tecnólogo em Análise e Desenvolvimento de Sistemas",
        text: "Encerramento do curso e colação de grau."
      },
      {
        title: "Segunda realização Enem",
        text: "Sem grande expectativas realizei o enem para incentivo de pessoas proximas."
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        title: "Bacharelado em Engenharia da Computação",
        text: "ingressei no curso de Engenharia da Computação do Instituto Federal de SP usando o SISU."
      }
    ]
  }
]

export default function Sobre({ sessaoEmFoco, indexDaSessao }) {
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

  const progress = (active / (data.length - 1)) * 100;

  return (
    <section className="sobre-section">

      {/* ===== CARROSSEL ===== */}
      <div className="carousel">
        <div className="carousel-viewport">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {data.map((card, index) => (
              <div className="card" key={index}>
                <h2>{card.year}</h2>

                {card.items.map((item, i) => (
                  <div key={i}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="containerBtnNav">
          <button onClick={prev} disabled={active === 0}>❮</button>
          <button onClick={next} disabled={active === data.length - 1}>❯</button>
        </div>
      </div>

    </section>
  )
}
