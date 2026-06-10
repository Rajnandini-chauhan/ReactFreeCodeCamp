
import { createElement } from "react"
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))


root.render(
  <h1 class = "header">We are studying about the react</h1>
)
// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative coding"
// h1.className="header"
// document.getElementById("root").appendchild(h1)