import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count+1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>addCount()}>Add Count</button>
    </>
  )
}

export default App
