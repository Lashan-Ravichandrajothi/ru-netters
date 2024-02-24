import {PlayersContext, WorkoutsContext} from '../context/PlayersContext'
import { useContext } from 'react'

export const usePlayersContext = () => {
    const context = useContext(PlayersContext)

    if(!context) {
        throw Error('Error')
    }

    return context
}