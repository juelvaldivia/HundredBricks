
/**
 * Created by Joel Valdivia
 * Date 28 Mayo 2020
 * Description: Archivo de Redux para Login
 */

// BEGIN Constantes
const TABLE_REQUEST = 'TABLE_REQUEST';
const TABLE_SUCCESS = 'TABLE_SUCCESS';
const TABLE_FAILURE = 'TABLE_FAILURE';
// END Constantes

// END Reducer

// inicia con un objeto vacío
const stateInitial = {
    request: '',
    error: null,
    columns: [],
    buttons: {},
    paginate: {
        current_page: 1,
        data: [],
        first_page_url: null,
        from: 1,
        last_page: 1,
        last_page_url: null,
        next_page_url: null,
        path: null,
        per_page: 10,
        prev_page_url: null,
        to: 1,
        total: 0,

    }
};

export default function tableReducer(state = stateInitial, action) {

    // verifica que cambiará dependiendo el tipo de accion
    switch (action.type) {
        case TABLE_REQUEST:
            // regresa el objeto del estado con el nuevo objeto
            return { ...state,  request: action.payload};
        case TABLE_SUCCESS:
            // regresa el objeto del estado con el nuevo objeto
            return {
                ...state,
                columns: action.payload.columns,
                buttons: action.payload.buttons,
                paginate: action.payload.paginate,
            };
        case TABLE_FAILURE:
            // regresa objeto vacío para el objeto error
            return { ...state, error: action.payload };
        default:
            // regresa el estado actual
            return state;
    }
}
// END Reducer

// BEGIN Acciones
export const tableRequest = (request) => { return { type: TABLE_REQUEST, payload: request } }
export const tableSuccess = (data) => { return { type: TABLE_SUCCESS, payload: data } }
export const tableFailure = (error) => { return { type: TABLE_FAILURE, payload: error } }
// END Acciones
