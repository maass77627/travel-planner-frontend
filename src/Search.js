
import { useState } from "react"

function Search() {
const [query, setQuery] = useState([])


    return (
        <div className="search">
         <h1>Where Do You Want To Go?</h1>
         <input value={query} type="text"></input>
        </div>
    )
}

export default Search