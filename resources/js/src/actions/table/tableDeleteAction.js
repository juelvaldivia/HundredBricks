
import { HttpService } from "../../services/HttpService";
import { tableLoadingShow, tableLoadingHide } from "../../redux/ducks/loadingDucks";
import { modalError, modalSuccess, modalClean } from "../../redux/ducks/modalDucks";
import { tableRequest, tableFailure } from "../../redux/ducks/tableDucks";
import { tableGetAction } from "./tableGetAction";

/**
 * Created by Joel Valdivia
 * Date 09 Jun 2020
 * 
 * Funcion para realizar una peticion http POST y obtener token
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const tableDeleteAction = async (dispatch, url, data, page, titleSuccess, titleError) => {

    // dispara accion para saber que se realiza una peticion HTTP
    dispatch(tableLoadingShow());
    dispatch(tableRequest(url));

    try {
        // realiza petición Http para actualizar usuario
        const tableResponseData = await HttpService(url, 'DELETE', data);
        // obtiene los usuarios con los cambios
        tableGetAction(dispatch, `${url}/paginate?page=${page}`)
        // limpia el modal del fomulario
        dispatch(modalClean());
        // muestra modal con exito
        dispatch(modalSuccess({ title: titleSuccess, body: tableResponseData.message }));

    } catch (error) {
        dispatch(tableLoadingHide())
        // dispara el error
        dispatch(tableFailure(error));
        // muestra modal con error
        dispatch(modalError({ title: titleError, body: error }));

    }
}