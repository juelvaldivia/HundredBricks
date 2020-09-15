
import { HttpService } from "../../services/HttpService";
import { modalError } from "../../redux/ducks/modalDucks";
import { loadingShow , loadingHide} from "../../redux/ducks/loadingDucks";
import { carRequest, carSuccess, carFailure } from "../../redux/ducks/carDucks";
import { carGetAction } from "./carGetAction";
import { bricksByUserAction } from "../bricks/bricksByUserAction";
import { bricksByPropertyAction } from "../bricks/bricksByPropertyAction";

/**
 * Created by Joel Valdivia
 * Date 14 Jun 2020
 * 
 * Funcion para realizar una peticion http GET y obtener listado de propiedades
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const carPayAction = async (dispatch, url, urlProperty, titleError) => {

  // dispara accion para saber que se realiza una peticion HTTP
  dispatch(loadingShow('Pagando ladrillos del carrito...'));
  dispatch(carRequest(url));

  try {
    // realiza petición Http
    let user = JSON.parse(localStorage.getItem('user'));

    const headers = {
        'authorization': user.token,
        'Content-Type': 'application/json'
    }
    
    HttpService(url, 'POST', null, headers).then(data => {
        console.log('Pagado', data)
        // dispara los datos al store de redux
        carGetAction(dispatch, '/car', 'Error al obtener el carrito')
        bricksByUserAction(dispatch, `/user/bricks`, 'Error al obtener ladrillos del usuario')
        bricksByPropertyAction(dispatch, urlProperty, 'Error al obtener ladrillos por propiedad')
    })

  } catch (error) {
    dispatch(loadingHide())
    // dispara el error
    dispatch(carFailure(error));
    // muestra modal con error
    dispatch(modalError({ title: titleError, body: error }));

  }
}