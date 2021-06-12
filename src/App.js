import React, { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    document.title = `Count: ${counter}`
  })

  const handleCounter = () => { 
    
    if(counter > 10) { 
      setVisibility(true)
    }

    return setCounter(prevState => prevState + 1)
  }

  const resetCounter = () => { 
    setCounter(0)
    setVisibility(false)
  }

  return (
    <div>
      <button onClick={handleCounter}>Click me</button>
      <p style={{color: "red"}}>Count: {counter}</p>
      {visibility === true && (
        <button onClick={resetCounter}>Reset Button</button>
      )}
    </div>
  )
}

export default App;
