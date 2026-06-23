import Jokes from "./JokesData"
import Joke from "./Joke"
export default function App(){
  const jokeElements = Jokes.map(joke =>{
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return(
    <div>
      {jokeElements}
    </div>
  )
}
