import axios from "axios";
import { OBTENER_PELICULAS } from "../types/types";

export const obtenerPeliculas = (akelab) => async (dispatch) => {
    
        try {
            /* let akelab = "123456789"; */
            const result =  await axios.get(`http://localhost:8000/api/${akelab}`);
            if(result) {
                dispatch({
                    type: OBTENER_PELICULAS,
                    payload: result.data,
                  });
              }
            
        } catch (error) {
            dispatch({
                type: OBTENER_PELICULAS,
                payload: [],
            }); 
        }
  };
  