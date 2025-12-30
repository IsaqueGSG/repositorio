import "./index.css"

export default function Navbar({ goTo, totalSessoes, sessaoEmFoco }) {
  
  return (
    <nav className="navbar">
      {Array.from({ length: totalSessoes }, (_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`step ${index === sessaoEmFoco ? "active" : ""}`}
        />
      ))}
    </nav>
  )
}
