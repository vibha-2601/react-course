// Note: the setter function provided by useState Hook does not automatically merge and update object.Yoy have to manually merge yourself and pass the value to the setter function.

// useState with an Object
import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
      <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
      
      <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})}/>
      <h2>First Name is: {name.firstName}</h2>
      <h2>Last Name is: {name.lastName}</h2>


    </div>
  )
}

export default HookCounterThree


