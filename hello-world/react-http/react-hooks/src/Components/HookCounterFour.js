// useState with array= setter does not automatically append the items to the end of list.

import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItems= () => {
setItems([...items, {id: items.length,
value: Math.floor(Math.random() * 10)+ 1}])
    } 

  return (
    <div>
        <button onClick={addItems}>Add a number</button>
      <ul>
        {
            
            items.map(item => (<li key={item.id}>{item.value}</li>))
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
