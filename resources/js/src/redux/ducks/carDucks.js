
/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * Description: Archivo de Redux para Propiedades
 */

// BEGIN Constantes
const CAR_REQUEST = 'CAR_REQUEST';
const CAR_SUCCESS = 'CAR_SUCCESS';
const CAR_FAILURE = 'CAR_FAILURE';
// END Constantes


// inicia con un objeto vacío
const stateInitial = {
    request: '',
    message: '',
    error: null,
    car: {
        bricks: [],
        total: 0,
        total_bricks: 0,
        user: ''
    }
};

// END Reducer
export default function carReducer(state = stateInitial, action) {

  // verifica que cambiará dependiendo el tipo de accion
  switch (action.type) {
    case CAR_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, request: action.payload };
    case CAR_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      if(action.payload)
        return { ...state, car: action.payload };
      else
        return {...state, car: stateInitial.car }
    case CAR_FAILURE:
      // regresa objeto vacío para el objeto error
      return { ...state, error: action.payload };
    default:
      // regresa el estado actual
      return state;
  }
}
// END Reducer

// BEGIN Acciones
export const carRequest = (data) => { return { type: CAR_REQUEST, payload: data } }
export const carSuccess = (data) => { return { type: CAR_SUCCESS, payload: data } }
export const carFailure = (error) => { return { type: CAR_FAILURE, payload: error } }
// END Acciones

