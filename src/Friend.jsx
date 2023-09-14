export default function Friend({friend}){
   const{name, email}=friend;
    return(
        <div className="box">
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            {/* <p>Id:{id}</p>
            <p>Address:{address}</p> */}
        </div>
    )
}