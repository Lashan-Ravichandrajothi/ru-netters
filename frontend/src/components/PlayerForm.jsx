import { useState } from 'react'
import { usePlayersContext } from "../hooks/usePlayersContext"

const PlayerForm = () => {
  const { dispatch } = usePlayersContext()
  const [name, setname] = useState('')
  const [age, setage] = useState('')
  const [contactNo, setcontactNo] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const player = {name, age, contactNo}
    
    const response = await fetch('/api/players', {
      method: 'POST',  
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setname('')
      setage('')
      setcontactNo('')
      console.log('new workout added:', json)
      dispatch({type: 'CREATE_PLAYERS', payload: json})
    }

  } 

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Player</h3>

      <label>Player name:</label>
      <input 
        type="text" 
        onChange={(e) => setname(e.target.value)} 
        value={name}
      />

      <label>Age:</label>
      <input 
        type="number" 
        onChange={(e) => setage(e.target.value)} 
        value={age}
      />

      <label>Contact Number:</label>
      <input 
        type="number" 
        onChange={(e) => setcontactNo(e.target.value)} 
        value={contactNo} 
      />

      <button>Add Player</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PlayerForm