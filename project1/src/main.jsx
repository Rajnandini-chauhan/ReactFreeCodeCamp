import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))
import reactLogo from "./assets/react-logo.png"
root.render(
  <main>
    <img src={reactLogo} alt="React Logo" width={"40px"}/>
    <h1>Fun Facts About React !</h1>
    <ul>
      <li>Was first realease in 2013 </li>
      <li>Was originally created by jordan walke</li>
      <li>Has well over 200k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)