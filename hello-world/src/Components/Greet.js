// Functional component
import React from 'react'

// function Greet(){
//     return <h1>Hello Robert</h1>
// }

// ES6 Arrow function
const Greet=(props)=>{
    console.log(props)
return (
<div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>)
}
export default Greet