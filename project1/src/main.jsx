import { createRoot } from "react-dom/client"
import { Fragment } from "react"
// FIX: Remove curly braces for default imports
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Page />
  </>
)

function MainComponent() {
  return (
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