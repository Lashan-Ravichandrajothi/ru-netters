import { createContext, useReducer } from "react";
import React from "react";

export const PlayersContext = createContext()

export const playersReducer = (state, action) => {
    switch (action.type){
         case 'SET_PLAYERS':
            return {
                players: action.payload   
            }
         case 'CREATE_PLAYERS':
            return {
                players: [action.payload, ...state.players]   
            }
        case 'DELETE_PLAYER':
            return {
                players: state.players.filter((p) => p._id !== action.payload._id)  
            }
        case 'SET_SELECTED_PLAYER':
            return {
                ...state,
                players: action.payload
            };
        default: 
            return state
    }
}

export const PlayersContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(playersReducer, {
        players: null
    })
    return (
        <PlayersContext.Provider value={{...state, dispatch}}>
            {children}
        </PlayersContext.Provider>
    )
}