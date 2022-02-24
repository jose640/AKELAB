import { OBTENER_PELICULAS } from "../types/types";

const initialState = {
    pelicula: [],
  };

  export function peliculasAkelabReducer(state = initialState, action) {
    switch (action.type) {
      case OBTENER_PELICULAS:
        return {
          ...state,
          pelicula: action.payload,
        };
      default:
        return state;
    }
  }