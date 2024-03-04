import React from 'react';


import { usePlayersContext } from "../hooks/usePlayersContext";
import { useNavigate } from "react-router-dom";

const PlayerDetails = ({ player }) => {
  const { dispatch } = usePlayersContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    // ... existing delete logic ...
    const response = await fetch(`/api/players/${player._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLAYER", payload: json });
    } 
  };

  const viewPlayer = async () => {
    // Check if player information exists (avoid potential errors)
    if (!player) {
      console.error("Player data not available. Consider fetching or passing it as a prop.");
      return; // Exit the function if no player data
    }

    // Store player details in local storage
    localStorage.setItem('selectedPlayer', JSON.stringify({
      name: player.name,
      age: player.age,
      dateofbirth: player.dateofbirth,
      address: player.address,
      contactNo: player.contactNo,
      email: player.email,
      school: player.school,
      postalid: player.postalid,
      passportNo: player.passportNo,
      bcNo: player.bcNo,
      achievement: player.achievement,
      position: player.position,
      injuries: player.injuries
    }));

    // Optionally display feedback or update state (replace with your preference)
    // alert('Player details stored in local storage!');

    // Navigate to the players page
    navigate('/admin/players');
  };

  return (
    <div className="player-details">
      <h4>{player.name}</h4>
      <p>Age: {player.age}</p>
      <p>Contact: {player.contactNo}</p>
      <span onClick={handleClick}>Delete</span>
      <button className="view" onClick={viewPlayer}>View Player</button>
    </div>
  );
};

export default PlayerDetails;
