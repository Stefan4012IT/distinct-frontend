import { useState } from 'react'
import './styles/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <h1>Distinct React + SCSS Setup</h1>
    </div>
    </>
  )
}

export default App
