
import { HttpService } from "../../services/HttpService";
import { modalError } from "../../redux/ducks/modalDucks";
import { loadingShow , loadingHide} from "../../redux/ducks/loadingDucks";
import { userBricksRequest, userBricksSuccess, userBricksFailure } from "../../redux/ducks/bricksDucks";

/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * 
 * Funcion para realizar una peticion http GET y obtener listado de propiedades
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const bricksByUserAction = async (dispatch, url, titleError) => {

  // dispara accion para saber que se realiza una peticion HTTP
  dispatch(loadingShow('Obteniendo ladrillos...'));
  dispatch(userBricksRequest(url));

  try {
    // realiza petición Http
    let user = JSON.parse(localStorage.getItem('user'));

    const headers = {
        'authorization': user.token
    }
    const responseData = await HttpService(url, 'GET', null, headers);

    // dispara los datos al store de redux
    dispatch(userBricksSuccess(responseData.data));
    dispatch(loadingHide())

  } catch (error) {
    dispatch(loadingHide())
    // dispara el error
    dispatch(userBricksFailure(error));
    // muestra modal con error
    dispatch(modalError({ title: titleError, body: error }));

  }
}