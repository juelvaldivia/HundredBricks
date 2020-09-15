
/**
 * Created by Joel Valdivia
 * Date 09 Jun 2020
 * Reductor Ducks sobre el Modal Global de la App
 */

// BEGIN Constantes
export const MODAL_SUCCESS = 'MODAL_SUCCESS';
export const MODAL_ALERT = 'MODAL_ALERT';
export const MODAL_ERROR = 'MODAL_ERROR';
export const MODAL_CLEAN = 'MODAL_CLEAN';
export const MODAL_OPEN_FORM = 'MODAL_OPEN_FORM';
// END Constantes

// END Reducer

/**
 * Reducer de alerta para detectar el cambio de una parte
 * del estado de la app (en este caso alerta) y realizar 
 * el cambio dependiendo de la accion
 * 
 * @param {*} state estado actual de la app
 * @param {*} action accion a tomar el reducer
 */
export default function modalReducer(state = {}, action) {

    // verifica que cambiará dependiendo el tipo de accion    
    switch (action.type) {
        case MODAL_OPEN_FORM:
            return { ...state, show: true, title: action.payload.title, form: action.payload.campos, size: action.payload.size}
        case MODAL_SUCCESS:
            // regresa el objeto del estado con el nuevo objeto
            return { ...state, show: true, title: action.payload.title, body: action.payload.body, className: 'modal-success' }
        case MODAL_ALERT:
            // regresa el objeto del estado con el nuevo objeto
            return { ...state, show: true, title: action.payload.title, body: action.payload.body };
        case MODAL_ERROR:
            // regresa el objeto del estado con el nuevo objeto
            return { ...state, show: true, title: action.payload.title, body: action.payload.body, className: 'modal-error' };
        case MODAL_CLEAN:
            // regresa objeto vacío para limpiar la alerta
            return { ...state, show: false, title: null, form: null, size: null, body: null };
        default:
            // regresa el estado actual
            return state;
    }

}
// END Reducer

// BEGIN Acciones
export const modalForm = (form) => { return { type: MODAL_OPEN_FORM, payload: form } }
export const modalSuccess = (modal) => { return { type: MODAL_SUCCESS, payload: modal } }
export const modalAlert = (modal) => { return { type: MODAL_ALERT, payload: modal } }
export const modalError = (modal) => { return { type: MODAL_ERROR, payload: modal } }
export const modalClean = () => { return { type: MODAL_CLEAN } }
// END Acciones