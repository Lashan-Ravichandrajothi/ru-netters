import { useEffect, useState } from "react"
import { usePlayersContext } from "../hooks/usePlayersContext"
import PlayerDetails from "../components/PlayerDetails"
import PlayerForm from "../components/PlayerForm"


const Admin = () => {
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
            <div className="players">
                {players && players.map((player) => (
                    <PlayerDetails key={player._id} player={player}/>
                ))}
            </div>
            <PlayerForm />
        </div>
    )
}

export default Admin