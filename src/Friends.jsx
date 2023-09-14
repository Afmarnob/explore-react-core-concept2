import Friend from './Friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
        const[friends,setFriends]=useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setFriends(data))
        },[])
    return(
        <div className='box'>
            <h2>Friends:{friends.length}</h2>
           {
            friends.map(friend=><Friend friend={friend}></Friend>)
           }
        </div>
    )
}