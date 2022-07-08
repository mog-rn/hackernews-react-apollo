import { useState } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Hackernews React Apollo */}
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
