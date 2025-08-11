import { useEffect, useState } from 'react'

import './App.css'

import axios from 'axios'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('/api/users')
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
      })
  }, [])

  return (
    <>
      <h1>Basic Fullstack Project</h1>
      <h2>Current User: {user.length}</h2>
      {
        user.map((u) => (
          <div key={u.id}>
            <h3>{u.id}</h3>
            <p>{u.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
