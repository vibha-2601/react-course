// run effects only once= we can mimic componentDidMount  with useEffect hooks by passing in an [] empty array as second parameter to useEffect.

import React, { useState, useEffect } from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log("useEffect called")
    window.addEventListener('mousemove', logMousePosition)

    return () => {
        console.log('Compont unmounting code')
        window.removeEventListener('mousemove',logMousePosition)
    }
    }, [])


  return (
    <div>
      Hooks X-{x}, Y-{y}
    </div>
  )
}

export default HooksMouse
