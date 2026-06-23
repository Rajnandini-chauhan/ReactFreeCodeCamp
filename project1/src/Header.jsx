// FIX: Import the logo here so this component can use it
import reactLogo from "./assets/react-logo.png"

export default function Header() {
  return (
    <header className="header">
      <img src={reactLogo} className="nav-logo" alt="React Logo" width="40px" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}