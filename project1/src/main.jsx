import { createRoot } from "react-dom/client"
import reactLogo from "./assets/react-logo.png"

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <TemporaryName />
    <Page />
  </>
)

function TemporaryName() {
  return (
    <main>
      <img src={reactLogo} alt="React Logo" width="40px" />
      <h1>Fun Facts About React!</h1>
    </main>
  )
}

function Page() {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200k stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}
