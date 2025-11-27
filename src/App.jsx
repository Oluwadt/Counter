import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count+1)
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={()=>addCount()}>Add Count</button>
    </>
  )
}

export default App
