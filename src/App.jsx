import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello so I am testing my CICD here</p>
        <p>This message will show up if my CICD passes</p>
      </div>
    </>
  )
}

export default App
