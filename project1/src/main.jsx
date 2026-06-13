import { createRoot } from "react-dom/client"
import reactLogo from "./assets/react-logo.png"
import { Fragment } from "react"

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Page />
  </>
)

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} className="nav-logo" alt="React Logo" width="40px" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li></ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <small>
        © 2026 Ziroll Development. All rights reserved
      </small>
    </footer>
  )
}

function MainComponent() {
  return (
    // <Fragment>
      <main>
        <h1>Fun Facts About React!</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200k stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    // </Fragment>
  )
}
function Page() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}
