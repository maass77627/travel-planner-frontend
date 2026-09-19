import {useEffect} from "react"


function TripDetails({detailTrip}) {
console.log(detailTrip)
// useEffect(() => {

// }, [])

if (!detailTrip) {
    return
}

    return (
        <div className="trip-details">
            <div className="header-wrap">
           <h3>Trip Details</h3>
           </div>
           <div className="trip-stat">
             <h1>Trip Stats</h1>
           </div>

           <div className="trip-det">
             <p>{detailTrip.name}</p>
             <p>{detailTrip.destination}</p>
             <img className="trip-image"  src={detailTrip.image_url}></img>
             <p>{detailTrip.description}</p>
             <label>Start Date:</label>
              <p>{detailTrip.start_date}</p>
              <label>End Date:</label>
              <p>{detailTrip.end_date}</p>
              </div>
        </div>
    )
}

export default TripDetails