import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }


// forward reference into child component=using React.forwardRef(), method takes a component as parameter
const FRInput = React.forwardRef((props, ref) => {
    return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  ) 
}) 


export default FRInput
