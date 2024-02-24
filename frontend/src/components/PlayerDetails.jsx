import { usePlayersContext } from "../hooks/usePlayersContext";

const PlayerDetails = ({ player }) => {
    const { dispatch } = usePlayersContext()

    const handleClick = async () => {
        const response = await fetch('/api/players/' + player._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_PLAYER', payload: json})
        }
    }

    return (
        <div className="player-details">
            <h4>{player.name}</h4>
            <p>Age: {player.age}</p>
            <p>Contact: {player.contactNo}</p>
            <span onClick={handleClick}>Delete</span>
            <button>View</button>
        </div>
    )
}

export default PlayerDetails