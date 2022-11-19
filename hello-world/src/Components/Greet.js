// Functional component
import React from 'react'

// function Greet(){
//     return <h1>Hello Robert</h1>
// }

// Destructing: 1]in function parameter itself.
// const Greet=({name, heroName}) => {
//     return (
// <div>
//     <h1>Hello {name} a.k.a {heroName}</h1>
 
//     </div>)
// }

// 2] destructing in function body
//  const Greet = props => {
//     const {name, heroName} = props
//   return (
//     <div>
//       <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
//   )
// }


// ES6 Arrow function
const Greet = props => {
    console.log(props)
return (
<div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>)
}
export default Greet