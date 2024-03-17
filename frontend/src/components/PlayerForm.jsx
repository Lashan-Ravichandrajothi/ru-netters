import { useState } from 'react'
import { usePlayersContext } from "../hooks/usePlayersContext"
import React from 'react';
import config from '../config';

const PlayerForm = () => {
  const { dispatch } = usePlayersContext()
  const [name, setname] = useState('')
  const [age, setage] = useState('')
  const [dateofbirth, setdateofbirth] = useState('')
  const [address, setaddress] = useState('')
  const [contactNo, setcontactNo] = useState('')
  const [email, setemail] = useState('')
  const [school, setschool] = useState('')
  const [postalid, setpostalid] = useState('')
  const [passportNo, setpassportNo] = useState('')
  const [bcNo, setbcNo] = useState('')
  const [achievement, setachievement] = useState('')
  const [position, setposition] = useState('')
  const [injuries, setinjuries] = useState('')

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const player = { name, age, dateofbirth, address,  contactNo, email, school, postalid, passportNo,  bcNo, achievement, position, injuries }
    
    const response = await fetch(config.apiUrl + '/api/players', {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setname('')
      setage('')
      setcontactNo('')
      setachievement('')
      setaddress('')
      setdateofbirth('')
      setemail('')
      setschool('')
      setpostalid('')
      setpassportNo('')
      setbcNo('')
      setposition('')
      setinjuries('')
      console.log('new workout added:', json)
      dispatch({type: 'CREATE_PLAYERS', payload: json})
    }
    
  } 

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Player</h3>

      <label>Player name:</label>
      <input 
        placeholder='Full name'
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

      <label>Date of birth:</label>
      <input 
        placeholder='DD/MM/YYYY'
        type="text" 
        onChange={(e) => setdateofbirth(e.target.value)} 
        value={dateofbirth} 
      />

      <label>Address:</label>
      <input 
        type="text" 
        onChange={(e) => setaddress(e.target.value)} 
        value={address} 
      />

      <label>Contact Number:</label>
      <input 
        type="number" 
        onChange={(e) => setcontactNo(e.target.value)} 
        value={contactNo} 
      />

      <label>E-mail address:</label>
      <input 
        type="text" 
        onChange={(e) => setemail(e.target.value)} 
        value={email} 
      />

      <label>School:</label>
      <input 
        type="text" 
        onChange={(e) => setschool(e.target.value)} 
        value={school} 
      />

      <label>National or postal ID No:</label>
      <input 
        type="number" 
        onChange={(e) => setpostalid(e.target.value)} 
        value={postalid} 
      />

      <label>Passport No:</label>
      <input 
        type="text" 
        onChange={(e) => setpassportNo(e.target.value)} 
        value={passportNo} 
      />

      <label>BC number:</label>
      <input 
        type="number" 
        onChange={(e) => setbcNo(e.target.value)} 
        value={bcNo} 
      />

      <label>Highest level of achievement in netball:</label>
      <input 
        type="text" 
        onChange={(e) => setachievement(e.target.value)} 
        value={achievement} 
      />

      <label>Positions played in netball:</label>
      <input 
        type="text" 
        onChange={(e) => setposition(e.target.value)} 
        value={position} 
      />

      <label>Any injuries or illneses to be conisdered:</label>
      <input 
        className='injury'
        type="text" 
        onChange={(e) => setinjuries(e.target.value)} 
        value={injuries} 
      />


      <button>Add Player</button>
      {error && <div className="error">Fields are empty</div>}
    </form>
  )
}

export default PlayerForm