
/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * Description: Archivo de Redux para Propiedades
 */

// BEGIN Constantes
const PROPERTIES_REQUEST = 'PROPERTIES_REQUEST';
const PROPERTIES_SUCCESS = 'PROPERTIES_SUCCESS';
const PROPERTIES_FAILURE = 'PROPERTIES_FAILURE';
// END Constantes


// inicia con un objeto vacío
const stateInitial = {
    request: '',
    error: null,
    properties: []
};

// END Reducer
export default function propertyReducer(state = stateInitial, action) {

  // verifica que cambiará dependiendo el tipo de accion
  switch (action.type) {
    case PROPERTIES_REQUEST:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, request: action.payload };
    case PROPERTIES_SUCCESS:
      // regresa el objeto del estado con el nuevo objeto
      return { ...state, properties: action.payload };
    case PROPERTIES_FAILURE:
      // regresa objeto vacío para el objeto error
      return { ...state, error: action.payload };
    default:
      // regresa el estado actual
      return state;
  }
}
// END Reducer

// BEGIN Acciones
export const propertyRequest = (data) => { return { type: PROPERTIES_REQUEST, payload: data } }
export const propertySuccess = (data) => { return { type: PROPERTIES_SUCCESS, payload: data } }
export const propertyFailure = (error) => { return { type: PROPERTIES_FAILURE, payload: error } }
// END Acciones
