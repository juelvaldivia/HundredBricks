
/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * Description: Archivo de Redux para Propiedades
 */

// BEGIN Constantes
const BRICKS_REQUEST = 'BRICKS_REQUEST';
const BRICKS_SUCCESS = 'BRICKS_SUCCESS';
const BRICKS_FAILURE = 'BRICKS_FAILURE';
// END Constantes

// BEGIN Constantes
const USER_BRICKS_REQUEST = 'USER_BRICKS_REQUEST';
const USER_BRICKS_SUCCESS = 'USER_BRICKS_SUCCESS';
const USER_BRICKS_FAILURE = 'USER_BRICKS_FAILURE';
// END Constantes


// inicia con un objeto vacío
const stateInitial = {
    request: '',
    error: null,
    bricks: [],
    userBricks: {
      request: '',
      error: null,
      username: '',
      bricks: []
    }
};

// END Reducer
export default function bricksReducer(state = stateInitial, action) {

  // verifica que cambiará dependiendo el tipo de accion
  switch (action.type) {
    case BRICKS_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, request: action.payload };
    case BRICKS_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, bricks: action.payload };
    case BRICKS_FAILURE:
      // regresa objeto vacío para el objeto error
      return { ...state, error: action.payload };

    case USER_BRICKS_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      const user = {
        request: action.payload
      }
      return { ...state, userBricks: user };
    case USER_BRICKS_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, userBricks: action.payload };
    case USER_BRICKS_FAILURE:
      // regresa objeto vacío para el objeto error
      const userError = {
        error: action.payload
      }
      return { ...state, userBricks: userError };
    default:
      // regresa el estado actual
      return state;
  }
}
// END Reducer

// BEGIN Acciones
export const bricksRequest = (data) => { return { type: BRICKS_REQUEST, payload: data } }
export const bricksSuccess = (data) => { return { type: BRICKS_SUCCESS, payload: data } }
export const bricksFailure = (error) => { return { type: BRICKS_FAILURE, payload: error } }
// END Acciones

// BEGIN Acciones
export const userBricksRequest = (data) => { return { type: USER_BRICKS_REQUEST, payload: data } }
export const userBricksSuccess = (data) => { return { type: USER_BRICKS_SUCCESS, payload: data } }
export const userBricksFailure = (error) => { return { type: USER_BRICKS_FAILURE, payload: error } }
// END Acciones

