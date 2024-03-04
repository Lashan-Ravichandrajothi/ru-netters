import React, { useState, useEffect } from 'react';

const Players = () => {
  const [storedPlayer, setStoredPlayer] = useState(null);

  // Fetch and display players (existing logic)

  useEffect(() => {
    // Retrieve player data from local storage on component mount
    const storedData = localStorage.getItem('selectedPlayer');

    if (storedData) {
      // Parse stored data and set it to the state if available
      setStoredPlayer(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="players-page">
      <h1>Player Details</h1>
      {/* Your code for fetching and displaying players */}

      {storedPlayer && (
        <div>
        <p><b>Name:</b> {storedPlayer.name}</p>
        <p><b>Age:</b> {storedPlayer.age}</p>
        <p><b>Date of Birth:</b> {storedPlayer.dateofbirth}</p>
        <p><b>Address:</b> {storedPlayer.address}</p>
        <p><b>Contact:</b> {storedPlayer.contactNo}</p>
        <p><b>E-mail address:</b> {storedPlayer.email}</p>
        <p><b>School:</b> {storedPlayer.school}</p>
        <p><b>Postal Id:</b> {storedPlayer.postalid}</p>
        <p><b>Passport Number:</b> {storedPlayer.passportNo}</p>
        <p><b>BC Number:</b> {storedPlayer.bcNo}</p>
        <p><b>Achievement:</b> {storedPlayer.achievement}</p>
        <p><b>Position:</b> {storedPlayer.position}</p>
        <p><b>Injuries:</b> {storedPlayer.injuries}</p>
      </div>
      
      )}
    </div>
  );
};

export default Players;

