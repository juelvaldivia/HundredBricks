
import { HttpService } from "../../services/HttpService";
import { tableLoadingShow, tableLoadingHide } from "../../redux/ducks/loadingDucks";
import { modalError } from "../../redux/ducks/modalDucks";
import { tableRequest, tableSuccess, tableFailure } from "../../redux/ducks/tableDucks";

/**
 * Created by Joel Valdivia
 * Date 09 Jun 2020
 * 
 * Funcion para realizar una peticion http POST y obtener token
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const tableGetAction = async (dispatch, url, titleError) => {

  // dispara accion para saber que se realiza una peticion HTTP
  dispatch(tableLoadingShow());
  dispatch(tableRequest(url));

  try {
    // realiza petición Http
    const tableResponseData = await HttpService(url, 'GET');

    // dispara los datos al store de redux
    dispatch(tableSuccess(tableResponseData.data));
    dispatch(tableLoadingHide())

  } catch (error) {
    dispatch(tableLoadingHide())
    // dispara el error
    dispatch(tableFailure(error));
    // muestra modal con error
    dispatch(modalError({ title: titleError, body: error }));

  }
}