import './Friends.css'
import { useEffect, useState } from "react"

export default function Users(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div className='box'>
        <h2>Users:{users.length}</h2>
        </div>
    )
}















// 1.declared a state to hold the data
// useeffect with callback dependancy array
// 3.factch use krbo load data