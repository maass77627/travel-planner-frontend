import Nav from "./Nav"
import Search from "./Search"
import Itenerary from "./Itenerary"
import AddTrip from './AddTrip';
import TravelPlanner from './TravelPlanner';
import MyTrips from './MyTrips';
import TripDetails from "./TripDetails";


function Home({destination, setDestination, place, attractions, setTrips, trips, currentUser, activities, setActivities, setCurrentUser}) {

console.log(destination)
console.log(currentUser)


    return (
        <div className="home">
            {currentUser ? <h1>Hello {currentUser.name}</h1> : <h1>Please Sign up or Login</h1>}
           <Nav setCurrentUser={setCurrentUser}></Nav>
       <Search destination={destination} setDestination={setDestination}></Search>
      <div className="wrap">
        {/* <div className="travel-wrap"> */}
        <TravelPlanner destination={destination} place={place} attractions={attractions}></TravelPlanner>
    
      
     
      <div className="trip-wrap"> 
      <AddTrip setTrips={setTrips} trips={trips}></AddTrip>
       
      <MyTrips setTrips={setTrips} trips={trips}></MyTrips>
      <TripDetails></TripDetails>
      </div>
      </div>
      <div className="iten-wrap">
      
       <Itenerary setActivities={setActivities} activities={activities}></Itenerary>
      </div>
     
      <footer className="footer"></footer>
        </div>
    )
}

export default Home