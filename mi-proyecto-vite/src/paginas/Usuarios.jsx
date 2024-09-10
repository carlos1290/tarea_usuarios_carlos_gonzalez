import { useEffect, useState} from "react"

export const User=()=>{
const [users,setusers]=useState({name:"",email:"",picture:{},country:""});
useEffect(()=>{
    async function obtenciondedatos() {
        const respuesta=await fetch("https://randomuser.me/api/?results=3");
        const datos=await respuesta.json();
        setusers(datos);
    }
    obtenciondedatos()
});
console.log(users);

return(
<div>
<h1>usuarios</h1>
<p>{users.name}</p>
<p>{users.email}</p>
<p>{users.country}</p>
<p>{users.picture}</p>
</div>
);
};