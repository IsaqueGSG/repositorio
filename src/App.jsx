import { useState, useEffect, useRef } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Sobre from './components/Sobre'

export default function App() {
  const [index, setIndex] = useState(0)
  const total = 3
  const isScrolling = useRef(false)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)


  function goTo(i) {
    if (i < 0 || i >= total) return
    setIndex(i)
  }

  function next() {
    goTo(index + 1)
  }

  function prev() {
    goTo(index - 1)
  }

  useEffect(() => {
    function onWheel(e) {
      if (isScrolling.current) return
      isScrolling.current = true
      e.deltaY > 0 ? next() : prev()
      isScrolling.current = false

    }

    function onKeyDown(e) {
      if (isScrolling.current) return
      if (e.key === 'ArrowDown') next()
      if (e.key === 'ArrowUp') prev()
      isScrolling.current = false
    }

    function onTouchStart(e) {
      touchStartY.current = e.touches[0].clientY
    }

    function onTouchEnd(e) {
      touchEndY.current = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY.current

      if (Math.abs(diff) < 50) return // ignora toque curto
      if (isScrolling.current) return

      isScrolling.current = true

      diff > 0 ? next() : prev()
      isScrolling.current = false
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [index])


  //usa os Indices das sessões para saber qual está em foco
  //indice as sessoes dependem da construcao do html abaixo
  const sessaoEmFoco = index



  return (
    <div className="app">
      <Navbar goTo={goTo} />

      <div
        className="viewport"
        style={{
          transform: `translateY(-${index * 100}vh)`
        }}
      >
        {/* Hard code para melhor visualização */}
        <section className="section">
          <Sobre
            sessaoEmFoco={sessaoEmFoco}
            indexDaSessao={0}
          />
        </section>

        <section className="section">
          <Projetos
            sessaoEmFoco={sessaoEmFoco}
            indexDaSessao={1}
          />
        </section>

        <section className="section">
          <Contato
            sessaoEmFoco={sessaoEmFoco}
            indexDaSessao={2}
          />
        </section>

      </div>
    </div>
  )
}
