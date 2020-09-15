
/**
 * Created by Joel Valdivia
 * Date 28 Mayo 2020
 * Description: Archivo de Redux para Login
 */

// BEGIN Constantes
const RECOVER_REQUEST = 'RECOVER_REQUEST';
const RECOVER_SUCCESS = 'RECOVER_SUCCESS';
const RECOVER_FAILURE = 'RECOVER_FAILURE';
// END Constantes

// END Reducer
export default function recoverReducer(state = {}, action) {

  // verifica que cambiará dependiendo el tipo de accion
  switch (action.type) {
    case RECOVER_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, message: action.payload };
    case RECOVER_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, message: action.payload };
    case RECOVER_FAILURE:
      // regresa objeto vacío para el objeto error
      return { ...state, message: action.payload };
    default:
      // regresa el estado actual
      return state;
  }
}
// END Reducer

// BEGIN Acciones
export const recoverRequest = (data) => { return { type: RECOVER_REQUEST, payload: data } }
export const recoverSuccess = (data) => { return { type: RECOVER_SUCCESS, payload: data } }
export const recoverFailure = (error) => { return { type: RECOVER_FAILURE, payload: error } }
// END Acciones
