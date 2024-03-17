import React, {useState, useEffect} from 'react';
import { usePlayersContext } from "../hooks/usePlayersContext";
import { useNavigate } from "react-router-dom";
import config from '../config';


const PlayerDetails = ({ player }) => {
  const { dispatch } = usePlayersContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await fetch(config.apiUrl + `/api/players/${player._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLAYER", payload: json });
    } 
  };

  const viewPlayer = async () => {
    if (!player) {
      console.error("Player data not available. Consider fetching or passing it as a prop.");
      return; 
    }

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

    navigate('/admin/players');
  };

  return (
    <div className="player-details">
      <h4>{player.name}</h4>
      <p>Age: {player.age}</p>
      <p>Contact: {player.contactNo}</p>
      <span onClick={handleClick}>Delete</span>
      <span onClick={handleClick}>Delete</span>
      <button className="view" onClick={viewPlayer}>View Player</button>
    </div>
  );
};

export default PlayerDetails;

