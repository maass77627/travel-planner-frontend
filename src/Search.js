
// import { useState } from "react"
import {useEffect} from "react"

function Search({setDestination, destination}) {
// const [query, setQuery] = useState([])

useEffect(() => {
    const timer = setTimeout(() => {

    }, 2000)
    return () => clearTimeout(timer)
}, [destination])



    return (
        <div className="search">
         <h1>Where Do You Want To Go?</h1>
         <input onChange={(e) => setDestination(e.target.value)} value={destination} type="text"></input>
        </div>
    )
}

export default Search