import "./index.css"

export default function Navbar({ goTo }) {
  return (
    <nav className="navbar">
      <button onClick={() => goTo(0)}>0</button>
      <button onClick={() => goTo(1)}>1</button>
      <button onClick={() => goTo(2)}>2</button>
    </nav>
  )
}

