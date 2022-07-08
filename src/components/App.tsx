import { useState } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Hackernews React Apollo */}
      <LinkList />
    </div>
  )
}

export default App
