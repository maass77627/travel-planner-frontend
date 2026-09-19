import { Box, Typography, Button } from "@mui/material";
import {useState} from "react"

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

function Itenerary({activities, setActivities}) {

    // const [activities, setActivities] = useState([])
   const [open, setOpen] = useState(false)
    const [activityData, setActivityData] = useState({
        name: "",
        day: "",
        location: "",
        time: "",
        notes: ""
    })

    const [dayPages, setDayPages] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
})

const activitiesPerPage = 1
const currentPage = dayPages[1]
const day1Activities = activities.filter(
    (activity) => activity.day === 1
)


const start = currentPage * activitiesPerPage
const paginatedActivities = day1Activities.slice(start,start + activitiesPerPage)


const day2Activities = activities.filter((activity) => Number(activity.day) === 2)

const start2 = dayPages[2] * activitiesPerPage

const paginatedActivities2 = day2Activities.slice(start2,start2 + activitiesPerPage)

const day3Activities = activities.filter((activity) => Number(activity.day) === 3)

const start3 = dayPages[3] * activitiesPerPage

const paginatedActivities3 = day3Activities.slice(start3,start3 + activitiesPerPage)

    
    function handleClick() {
        setOpen(true);
    }




    
function handlePrev3() {
  setDayPages({...dayPages, 3: dayPages[3] - 1})
}

function handleNext3() {
  setDayPages({...dayPages,3: dayPages[3] + 1})
}


const day4Activities = activities.filter(
  (activity) => Number(activity.day) === 4
)

const start4 = dayPages[4] * activitiesPerPage

const paginatedActivities4 = day4Activities.slice(start4, start4 + activitiesPerPage)



    
function handlePrev() {
setDayPages({...dayPages,1: dayPages[1] - 1})
}

function handleNext() {
setDayPages({...dayPages,1: dayPages[1] + 1})
}

function handlePrev4() {
  setDayPages({...dayPages,4: dayPages[4] - 1})
}

function handleNext4() {
  setDayPages({...dayPages,4: dayPages[4] + 1})
}

    function handleClose() {
        setOpen(false);
    }


    function handlePrev2() {
    setDayPages({...dayPages,2: dayPages[2] - 1})
}

function handleNext2() {
    setDayPages({...dayPages,2: dayPages[2] + 1})
}


    function handleChange(e) {
       setActivityData({...activityData, [e.target.name]: e.target.value})
    }

    function handleDelete(id) {
    console.log(id)
    

    fetch(`http://localhost:4567/activities/${id}`, {
        method: "DELETE"
    })

    let updatedActivities = activities.filter(
        (activity) => activity.id !== id
    )

    setActivities(updatedActivities)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:4567/activities", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activityData)
        })
        .then((res) => res.json())
        .then((json) => {
            setActivities([...activities, json])
            console.log(json)
        })
        console.log("Activity submitted")
    }


    return (
        <Box className="itinerary">

            <Typography variant="h4">
                Itinerary
            </Typography>
             
            <Box
                className="grid"
                
            >
                  
                <Box className="iten-card">
                     <div className="wrap"> 
                      <IconButton onClick={handlePrev}><ArrowBackIcon /></IconButton> 
                    <Typography>Day 1:</Typography>  <IconButton onClick={handleNext}><ArrowForwardIcon /></IconButton> 
                    </div> 
                    {
                    paginatedActivities.map((activity) => (
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.location}</p>
                          <p>{activity.time}</p>
                          <p>{activity.notes}</p>
                          <button onClick={() => handleDelete(activity.id)}>delete</button>
                          </div>
                    ) )
              }

                </Box>

                <Box className="iten-card">
                    <div className="wrap">
                   <IconButton onClick={handlePrev2}><ArrowBackIcon /> <Typography>Day 2:</Typography></IconButton><IconButton onClick={handleNext2}><ArrowForwardIcon /></IconButton>
                   </div>
                     {
                    paginatedActivities2.filter((activity) => activity.day === 2).map((activity) => (
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.location}</p>
                          <p>{activity.time}</p>
                          <p>{activity.notes}</p>
                          <button onClick={() => handleDelete(activity.id)}>delete</button>
                          </div>
                    ) )
                }
                </Box>

                <Box className="iten-card">
                   <div className="wrap">
  <IconButton onClick={handlePrev3}>
    <ArrowBackIcon />
  </IconButton>

  <Typography>Day 3:</Typography>

  <IconButton onClick={handleNext3}>
    <ArrowForwardIcon />
  </IconButton>
</div>
                     {
                    paginatedActivities3.filter((activity) => activity.day === 3).map((activity) => (
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.location}</p>
                          <p>{activity.time}</p>
                          <p>{activity.notes}</p>
                          <button onClick={() => handleDelete(activity.id)}>delete</button>
                          </div>
                    ) )
                }
                </Box>

                <Box className="iten-card">
                    <Typography>Day 4:</Typography>
                     {
                    paginatedActivities4.map((activity) => (
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.location}</p>
                          <p>{activity.time}</p>
                          <p>{activity.notes}</p>
                          <button onClick={() => handleDelete(activity.id)}>delete</button>
                          </div>
                    ) )
                }
                </Box>

                <Box className="iten-card">
                    <Typography>Day 5:</Typography>
                     {
                    activities.filter((activity) => activity.day === 5).map((activity) => (
                        <div>
                          <h3>{activity.name}</h3>
                          <p>{activity.location}</p>
                          <p>{activity.time}</p>
                          <p>{activity.notes}</p>
                          <button className="button" onClick={() => handleDelete(activity.id)}>delete</button>
                          </div>
                    ) )
                }
                </Box>
            </Box>

            <Button
                onClick={handleClick}
                // variant="contained"
                // sx={{ marginTop: 3 }}
            >
                Add Activity
            </Button>

            <Dialog open={open}>

                <DialogTitle>
                    Add Activity
                </DialogTitle>

                <DialogContent>
                    <form >
                        <TextField
                        name="day"
                        onChange={handleChange}
                        label="Day"
                        value={activityData.day}
                         fullWidth
                         margin="normal"
                            />
                    <TextField
                    name="name"
                    onChange={(e) => handleChange(e)}
                        label="Activity Name"
                        value={activityData.name}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                    name="location"
                    onChange={(e) => handleChange(e)}
                        label="Location"
                        value={activityData.location}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                    name="time"
                    onChange={(e) => handleChange(e)}
                        label="Time"
                        value={activityData.time}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                    name="notes"
                    onChange={(e) => handleChange(e)}
                        label="Notes"
                        value={activityData.notes}
                        fullWidth
                        margin="normal"
                    />
                   </form>
                </DialogContent>

                <DialogActions>

                    <Button onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button onClick={handleSubmit}  variant="contained">
                        Add Activity
                    </Button>

                </DialogActions>
                    
            </Dialog>


        </Box>
        
    )
}

export default Itenerary