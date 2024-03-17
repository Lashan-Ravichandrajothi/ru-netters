import { createContext, useReducer } from "react";
import React from "react";

export const PlayersContext = createContext()

export const playersReducer = (state, action) => {
    switch (action.type) {
      case 'SET_PLAYERS':
        return {
          players: action.payload,
        };
      case 'CREATE_PLAYERS':
        return {
          players: [action.payload, ...state.players],
        };
      case 'DELETE_PLAYER':
        return {
          players: state.players.filter((p) => p._id !== action.payload._id),
        };
      case 'SET_SELECTED_PLAYER':
        return {
          ...state,
          players: action.payload, 
        };
    //   case 'EDIT_PLAYER':
    //     const updatedPlayerIndex = state.players.findIndex(
    //       (player) => player._id === action.payload._id
    //     );
  
    //     if (updatedPlayerIndex !== -1) {
    //       const updatedPlayers = [
    //         ...state.players.slice(0, updatedPlayerIndex),
    //         { ...state.players[updatedPlayerIndex], ...action.payload },
    //         ...state.players.slice(updatedPlayerIndex + 1),
    //       ];
  
    //       return {
    //         players: updatedPlayers,
    //       };
    //     } else {
    //       console.warn('Player to edit not found.');
    //       return state;
    //     }
      default:
        return state;
    }
  };
  

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