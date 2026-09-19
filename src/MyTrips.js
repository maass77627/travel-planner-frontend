
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import TripDetails from "./TripDetails";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

function MyTrips({trips, setTrips}) {
console.log(trips)
const [page, setPage] = useState(0)
const tripsPerPage = 2; 
const start = page * tripsPerPage;

const end = start + tripsPerPage;

const displayedTrips = trips?.slice(start, end);
const [detailTrip, setDetailTrip] = useState({})
 

// function showDetails() {

// }

function handleDelete(id) {
    console.log("deleted")
    fetch(`http://localhost:4567/trips/${id}`, {
        method: "DELETE"
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to delete trip")
        }

        let updatedTrips = trips.filter((trip) => trip.id !== id)
        setTrips(updatedTrips)
    })
}

function handlePrev() {
setPage(page - 1);
}

function handleNext() {
setPage(page + 1);
}


    return (
        <div className="my-trips">
            {/* <button>Prev</button> */}
            <div className="heading-wrap">
            <h3>My Trips</h3>
            </div>
            
            <div className="trip-container">
                <IconButton onClick={handlePrev}>
  <ArrowBackIcon />
</IconButton>


                {/* <button onClick={() => handlePrev()}>Prev</button> */}
            {displayedTrips?.map((trip) => (
  <Card className="trip-card" key={trip.id}>
    <CardContent>
      {/* <Typography >
        <h4>{trip.name}</h4>
      </Typography> */}

       <Typography>
        {trip.destination}
      </Typography>
       {/* <Typography>
        {trip.start_date}
      </Typography>
      <Typography>
        {trip.end_date}
      </Typography> */}
        <Button onClick={() => handleDelete(trip.id)}>Delete</Button><br></br>
        <Button onClick={() => setDetailTrip(trip)}>View Details</Button>
    </CardContent><br></br>
  
  </Card>
))}

<IconButton onClick={handleNext}>
  <ArrowForwardIcon />
</IconButton>

</div>
          
           <TripDetails detailTrip={detailTrip}></TripDetails>
        </div>
    )
}

export default MyTrips