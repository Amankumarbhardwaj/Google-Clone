import React from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
function Search({hidebuttons}){
    const[input,setInput] = useState("Search");
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon
                className="searchicon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {
                !hidebuttons && <div className="search_button">

           <Button type="submit" variant="outlined">Google Search</Button>
           
           <Button type="submit" variant="outlined">I am Feeling Lucky</Button>
           </div>
            }
            

           

        </form>
    )
}
export default Search