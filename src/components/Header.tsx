import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/">Hacker News</Link>
        <Link to="/">new</Link>
        <Link to="/create">Submit</Link>
    </div>
  )
}

export default Header