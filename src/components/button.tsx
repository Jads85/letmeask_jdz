import { useState,useEffect } from "react";



export function Button() {
    const[counter,setCounter] = useState(0)

    useEffect(()=>{
        console.log(counter);
    },[counter])

    function increment() {
        setCounter(counter + 1);
    }

   return(
     <button onClick={increment}>{counter}</button>
   ) 
  
}