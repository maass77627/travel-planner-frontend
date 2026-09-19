import { useState} from "react"
import { TextField, Button, Box, Typography } from "@mui/material";

function AddTrip({trips, setTrips}) {

    const [formData, setFormData] = useState({
name: "",
destination: "",
start_date: "",
end_date: "",
description: "",
image_url: ""
});

function handleChange(e) {
setFormData({...formData,[e.target.name]: e.target.value,});
}



    function handleSubmit(e) {
        e.preventDefault()

        fetch(`https://api.unsplash.com/search/photos?query=${formData.destination}`, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    }
  }).then((res) => res.json())
  .then((json) => {
    console.log(json)
   const imageUrl = json.results[0]?.urls?.regular
   
   
   const tripData = {
  ...formData,
  image_url: imageUrl
}
  



console.log(formData)

       return fetch("http://localhost:4567/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(tripData)
        })
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setTrips([...trips, json])
        })
  
}



    return (
         <Box className="trip-form">
            <div className="heading-wrap">
    <Typography variant="h5">
      Add a Trip
    </Typography>
    </div>

    <form onSubmit={handleSubmit}>

      <TextField
        label="Trip Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Japan Adventure"
        required
      /> 

      <TextField
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="e.g. Tokyo, Japan"
        required
      /> 

      <TextField
        label="Start Date"
        name="start_date"
        type="date"
        value={formData.start_date}
        onChange={handleChange}
        required
      /> 

      <TextField
        label="End Date"
        name="end_date"
        type="date"
        value={formData.end_date}
        onChange={handleChange}
        required
      /> 

       <TextField
        label="Description"
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
        required
      /> 
{/* 
      <TextField
        label="Image"
        name="image_url"
        type="text"
        value={formData.image_url}
        onChange={handleChange}
        required
      />  */}

      <Button type="submit" > 
        Create Trip
      </Button>

    </form>
  </Box>
//         <div className="add-trip"> <h2>Add a Trip</h2> <form onSubmit={(e) => handleSubmit(e)}> <div> 
//             <label >Trip Name</label> 
//             <input onChange={(e) => handleChange(e)} id="name" name="name" value={formData.name} type="text" placeholder="e.g. Japan Adventure" required /> </div>
// <div>
//   <label >Destination</label>
//   <input onChange={(e) => handleChange(e)} id="destination" name="destination" value={formData.destination} type="text" placeholder="e.g. Tokyo, Japan" required/>
// </div>

// <div>
//   <label >Start Date</label>
//   <input onChange={(e) => handleChange(e)} id="start-date" name="start_date" value={formData.start_date} type="date" required/>
// </div>

// <div>
//   <label >End Date</label>
//   <input onChange={(e) => handleChange(e)} id="end-date"  value={formData.end_date} name="end_date" type="date" required/>
// </div>

// <button type="submit">Create Trip</button>

// </form> </div>
       
    )
}

export default AddTrip