// Developed by @ciucol
// 29/07/2021
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const api = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(json => setUser(json))
    }

    const url = 'http://localhost:3000/country'
    api(url)
  }, [])

  return (
    <>
      <h3>Home</h3>
      <h2>{user}</h2>
    </>
  )
}
export default Home
