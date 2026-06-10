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
    <main>
      <img src={reactLogo} alt="React Logo" width="40px" />
      <nav>
        <ul className="nav-list"><li>Pricing</li>
        <li>About</li>
        <li>Contact</li></ul>
      </nav>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>
        © 2026 Ziroll Development. All rights reserved
      </small>
    </footer>
  )
}

function MainComponent() {
  return (
    <Fragment>
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
    </Fragment>

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
