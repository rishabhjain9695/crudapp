import React from 'react'
import { useState ,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
export default function Home2() {
  const[names,setName]=useState("");
  const[ages,setAge]=useState("");
  const[arr,setArr]=useState([]);
  useEffect(()=>{
      console.log(arr,"ddddd");
  },[arr])
  const add=()=>{
    const obj={
        name:names,
        age:ages
       }

       setArr([...arr,obj]);
      }

      
  return (
    <div>
      <input type="text" name="" id="" value={names} onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" name="" id="" value={ages} onChange={(e)=>{setAge(e.target.value)}}/>
      <button onClick={add}>
       <NavLink to='/'>update</NavLink>
      </button>
    </div>
  )
}
