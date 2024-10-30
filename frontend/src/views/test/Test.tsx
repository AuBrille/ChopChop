import { useState } from "react"


export const Test = () => {
    const[calorie,setCalorie]=useState<number>(0)
    const handleClick =(amount?:number)=>{
        setCalorie((amount??0)+1)
    }
    return <div className="bg-gray-600 "><button onClick={() =>handleClick(calorie)}>Increase</button>{calorie}</div>
    
}

//let listexo = [{exo:'pompe', met:10},{exo:"pull-up", met: 12}]

//let pgrm = [{...listexo[0], temps:0.5}] // ... reprend tout ce qu'il y a dans l'objet

