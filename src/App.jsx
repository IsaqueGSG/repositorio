import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Sobre from './components/Sobre'

export default function App() {
  const [index, setIndex] = useState(0)
  const total = 4
  const isScrolling = useRef(false)

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

      if (e.deltaY > 0) {
        next()
      } else {
        prev()
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 800) // mesmo tempo da animação
    }

    function onKeyDown(e) {
      if (isScrolling.current) return

      if (e.key === 'ArrowDown') {
        isScrolling.current = true
        next()
      }

      if (e.key === 'ArrowUp') {
        isScrolling.current = true
        prev()
      }

      if (isScrolling.current) {
        setTimeout(() => {
          isScrolling.current = false
        }, 800)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [index])

  return (
    <div className="app">
      <Navbar goTo={goTo} />

      <div
        className="viewport"
        style={{
          transform: `translateY(-${index * 100}vh)`
        }}
      >
        <section className="section"><Home /></section>
        <section className="section"><Projetos /></section>
        <section className="section"><Contato /></section>
        <section className="section"><Sobre /></section>
      </div>
    </div>
  )
}
