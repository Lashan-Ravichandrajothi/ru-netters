const PlayerDetails = ({ player }) => {
    return (
        <div className="player-details">
            <h4>{player.name}</h4>
            <p>Age: {player.age}</p>
            <p>Contact: {player.contactNo}</p>
        </div>
    )
}

export default PlayerDetails