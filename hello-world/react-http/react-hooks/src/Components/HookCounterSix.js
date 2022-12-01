// conditionally run effects

import React, {useState, useeffect, useEffect} from 'react'

function HookCounterSix() {
    const [count, setCount] = useState(0)
    const[name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect Updating document title')
        document.title = `You click ${count} times`
    }, [count])
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
        
    <button onClick={()=>setCount(count+1)}>Click Me {count} times</button>
    </div>
  )
}

export default HookCounterSix
