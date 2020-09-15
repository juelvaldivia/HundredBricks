
/**
 * Created by Joel Valdivia
 * Date 28 Mayo 2020
 * Description: Archivo de Redux para Login
 */

// BEGIN Constantes
const FORGOT_REQUEST = 'FORGOT_REQUEST';
const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
const FORGOT_FAILURE = 'FORGOT_FAILURE';
// END Constantes

// END Reducer
export default function forgotReducer(state = {}, action) {

  // verifica que cambiará dependiendo el tipo de accion
  switch (action.type) {
    case FORGOT_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, message: action.payload };
    case FORGOT_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, message: action.payload };
    case FORGOT_FAILURE:
      // regresa objeto vacío para el objeto error
      return { ...state, message: action.payload };
    default:
      // regresa el estado actual
      return state;
  }
}
// END Reducer

// BEGIN Acciones
export const forgotRequest = (data) => { return { type: FORGOT_REQUEST, payload: data } }
export const forgotSuccess = (data) => { return { type: FORGOT_SUCCESS, payload: data } }
export const forgotFailure = (error) => { return { type: FORGOT_FAILURE, payload: error } }
// END Acciones
