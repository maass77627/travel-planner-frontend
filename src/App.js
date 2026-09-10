import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import Nav from "./Nav"
import Search from "./Search"
import Itenerary from "./Itenerary"
function App() {
  const [destination, setDestination] = useState("Paris")
  const [place, setPlace] = useState([])
  useEffect(() => {
   
  fetch(`https://api.unsplash.com/search/photos?query=${destination}`, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    }
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results)
      console.log(json.results[0].urls)
      setPlace(json.results[0])
    })
}, [])

  
  return (
    <div className="App">
      <Nav></Nav>
      <Search></Search>
      <div className="wrap">
        < div className="travel-wrap">
      <h1>Travel Planner</h1>
      <img id="travel-image" src={place?.urls?.full}></img> 
      </div>
      <Itenerary></Itenerary>
      </div>
    </div>
  );
}

export default App;
