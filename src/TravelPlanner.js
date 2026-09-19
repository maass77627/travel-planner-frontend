import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function TravelPlanner({attractions, place, destination}) {
console.log(place)
console.log(destination)
console.log(attractions)


    return (
        <div className="travel-planner">
          <h1>Travel Planner</h1>
          <h2>{destination}</h2>
          <img id="travel-image" src={place?.urls?.full}></img><br></br> 
         <label>Attractions:</label>
         {
         attractions?.slice(0,5).map((att) => (
           <p> {att.name}</p>
        ))
         }
        </div>
    )
}

export default TravelPlanner