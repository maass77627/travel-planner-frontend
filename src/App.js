
import './App.css';
import {useEffect, useState} from "react"
// import Nav from "./Nav"
// import Search from "./Search"
// import Itenerary from "./Itenerary"
// import AddTrip from './AddTrip';
// import TravelPlanner from './TravelPlanner';
// import MyTrips from './MyTrips';
// import TripDetails from "./TripDetails";
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';

import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  const [destination, setDestination] = useState("Paris")
    const [currentUser, setCurrentUser] = useState(null)
  const [place, setPlace] = useState([])
  const [trips, setTrips] = useState([])
  const [placeId, setPlaceId] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [attractions, setAttractions] = useState([])
  const [activities, setActivities] = useState([])
  
  console.log(process.env.REACT_APP_GEOAPIFY_KEY);

  useEffect(() => {
  fetch("http://localhost:4567/activities", {
    credentials: "include"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("FRED'S ACTIVITIES:", data)
      setActivities(data)
    })
    .catch((error) => {
      console.error("ACTIVITIES ERROR:", error)
    })
}, [])


  useEffect(() => {
     if (!destination) return;

  fetch(`https://api.unsplash.com/search/photos?query=${destination}`, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    }
  })
    .then((res) => res.json())
    .then((json) => {
     
      setPlace(json?.results[0])
    })
}, [destination])

useEffect(() => {
   if (!destination) return;

  console.log(process.env.REACT_APP_GEOAPIFY_KEY)
  fetch(`https://api.geoapify.com/v1/geocode/search?text=${destination}&type=city&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`)
  
  
    .then((res) => res.json())
    .then((json) => {
      const properties = json?.features[0]?.properties

    setCoordinates({lat: properties?.lat,lon: properties?.lon})
     
      setPlaceId(json.features[0]?.properties?.place_id)
    })

}, [destination])


useEffect(() => {
  fetch("http://localhost:4567/me", {
    credentials: "include"
  })
    .then((res) => {
      console.log("Status:", res.status)
      return res.json()
    })
    .then((data) => {
      console.log("ME RESPONSE:", data)
      setCurrentUser(data)
    })
    .catch((err) => {
      console.error("ME ERROR:", err)
    })
}, [])

useEffect(() => {
 if (!placeId || !coordinates) return;
 fetch(`https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=circle:${coordinates.lon},${coordinates.lat},10000&limit=100&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`)
  .then((res) => res.json())
  .then((json) => {
    const attractions = json.features
  .map(feature => feature.properties)
  .filter(place => place.name)
    console.log("tourism", json)
    console.log(attractions)
    setAttractions(attractions)
  })
},[placeId])

useEffect(() => {
  fetch("http://localhost:4567/trips", {
    credentials: "include"
  })
    .then((res) => res.json())
    .then((data) => {
      setTrips(data)
    })
}, [])


  console.log(currentUser)
  return (
    <div className="App">
{/* <Home destination={setDestination} place={place} attractions={attractions} setTrips={setTrips} trips={trips}></Home> */}
      <BrowserRouter>
      {/* <Home destination={destination} setDestination={setDestination} place={place} attractions={attractions} setTrips={setTrips} trips={trips} currentUser={currentUser}></Home> */}
     <Routes>
      <Route path="/" element={<Home setCurrentUser={setCurrentUser} setActivities={setActivities} activities={activities} destination={destination} setDestination={setDestination} place={place} attractions={attractions} setTrips={setTrips} trips={trips} currentUser={currentUser}></Home>}></Route> 
   <Route path="/signup" element={<SignUp></SignUp>}></Route>
   <Route path="/login" element={<Login></Login>}></Route>
    
  

     </Routes>
      {/* <Nav></Nav>
       <Search destination={destination} setDestination={setDestination}></Search>
      <div className="wrap">
        <div className="travel-wrap">
        <TravelPlanner destination={destination} place={place} attractions={attractions}></TravelPlanner>
    
      </div>
     
      <div className="trip-wrap">
      <AddTrip setTrips={setTrips} trips={trips}></AddTrip> <MyTrips setTrips={setTrips} trips={trips}></MyTrips><TripDetails></TripDetails>
      </div>
      
      </div>
      <div className="iten-wrap">
      
       <Itenerary></Itenerary>
      </div>
     
      <footer className="footer"></footer> */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;
