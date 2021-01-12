import React, { useState, useEffect } from 'react'

export default function HookExample() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    const m = Math.random()
    console.log('useEffect create ', m)
    document.title = `[${count}] You clicked times`

    return () => {
      console.log(`unload useEffect ${m}`)
    }
  }, [count])

  console.log(useState(0))
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
