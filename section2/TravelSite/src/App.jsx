import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
export default function App(){
  const entries = data.map((item) => (
    <Entry 
    key={item.id}
    image={item.image.src}
    alt={item.image.alt}
    country={item.country}
    title={item.title}
    dates={item.dates}
    description={item.description}
    googleMapsLink={item.googleMapsLink}
     />
  ))
  return(
    <>
      <Header />
      {entries}

    </>
  )
}