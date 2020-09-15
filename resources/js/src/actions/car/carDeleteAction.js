
import { HttpService } from "../../services/HttpService";
import { modalError } from "../../redux/ducks/modalDucks";
import { loadingShow , loadingHide} from "../../redux/ducks/loadingDucks";
import { carRequest, carSuccess, carFailure } from "../../redux/ducks/carDucks";

/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * 
 * Funcion para realizar una peticion http GET y obtener listado de propiedades
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const carDeleteAction = async (dispatch, url, data, titleError) => {

  // dispara accion para saber que se realiza una peticion HTTP
  dispatch(loadingShow('Quitando ladrillo del carrito...'));
  dispatch(carRequest(url));

  try {
    // realiza petición Http
    let user = JSON.parse(localStorage.getItem('user'));

    const headers = {
        'authorization': user.token,
        'Content-Type': 'application/json'
    }
    const responseData = await HttpService(url, 'DELETE', data, headers);

    // dispara los datos al store de redux
    dispatch(carSuccess(responseData.data));
    dispatch(loadingHide())

  } catch (error) {
    dispatch(loadingHide())
    // dispara el error
    dispatch(carFailure(error));
    // muestra modal con error
    dispatch(modalError({ title: titleError, body: error }));

  }
}