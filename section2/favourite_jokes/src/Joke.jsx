import "./App.css"
export default function Joke(props){
    return(
        <div className="content">
            <p>Setup:  {props.setup}</p>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}