import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const handlerAdd=()=>{
    const newTeam=team+1;
    setTeam(newTeam);
    
    }
    const handlerRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }
    
    const TeamStyle={
        border:'2px solid red',
        padding:'20px',
        margin:'20px',
        borderRadius:'20px',

    }

    return(
        <div style={TeamStyle}> 
            <h3>Players:{team}</h3>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={handlerRemove}>Remove</button>
        </div>
    )
}