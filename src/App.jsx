import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const appClone = import.meta.env.VITE_APP_NAME

  function addCount() {
    setCount(count+1)
  }

  return (
    <>
      <h1>Serving from {appClone}</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>addCount()}>Add Count</button>
    </>
  )
}

export default App
