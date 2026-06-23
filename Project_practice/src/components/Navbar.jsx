
import reactLogo from "../assets/react-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactLogo} className="nav-logo" alt="React Logo" width={40} />
            <span className="nav-span">ReactFacts</span>
        </nav>
    )
}