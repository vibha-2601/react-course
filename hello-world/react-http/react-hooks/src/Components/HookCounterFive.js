// useEffect - use after rendering of function.

import React, { useState, useEffect } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
  return (
    <div>
      <button onClick={() => setCount(  count + 1)}>Click Me {count} times</button>
    </div>
  )
}

export default HookCounterFive

