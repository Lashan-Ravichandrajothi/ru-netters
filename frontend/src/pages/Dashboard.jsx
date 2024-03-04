import { useEffect, useState } from "react"
import { usePlayersContext } from "../hooks/usePlayersContext"
import PlayerDetails from "../components/PlayerDetails"
import React from 'react';


const Dashboard = () => {
    const {players, dispatch} = usePlayersContext()

    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch('/api/players')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_PLAYERS', payload: json})
            }
        }

        fetchPlayers();
    }, [])

    return (
        <div className="admin">
            <div className="players dash">
                {players && players.map((player) => (
                    <div className="player-details-dash">
                        <h4>{player.name}</h4>
                     </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard