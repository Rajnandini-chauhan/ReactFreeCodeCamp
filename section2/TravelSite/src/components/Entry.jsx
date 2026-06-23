import marker from "../assets/marker.png"

export default function Entry(props){
    return(
         <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.image} alt={props.title} />
            </div>
            <div className="content">
                
                <img className="marker"src={marker} alt="Map marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.description}</p>
            </div>

         </article>
    )
}