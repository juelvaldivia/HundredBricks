import { recoverRequest, recoverSuccess, recoverFailure } from "../../redux/ducks/recoverDucks";
import { loadingHide } from "../../redux/ducks/loadingDucks";
import { modalError } from "../../redux/ducks/modalDucks";
import { HttpService } from "../../services/HttpService";

/**
* Created by Joel Valdivia
* Date 09 Jun 2020
* 
* Funcion para realizar una peticion http POST y obtener token
* @param {Object} dispatch funcion que dispara acciones de Redux
*/
export const recoverAction = async (dispatch, history, data) => {

    // dispara accion para saber que se realiza una peticion HTTP
    dispatch(recoverRequest());
  
    try {
      // realiza petición Http
      const recoverResponseData = await HttpService('/auth/change', 'POST', data);
  
      // dispara los datos al store de redux
      dispatch(recoverSuccess(recoverResponseData.message));
      dispatch(loadingHide())
      // redirije al inicio
      history.push('/login');
  
    } catch (error) {
      dispatch(loadingHide())
      // dispara el error
      dispatch(recoverFailure(error));
      // muestra modal con error
      dispatch(modalError({ title: 'Error al crear contraseña', body: error }));
      setTimeout(() => {  history.push('/login'); }, 2000);
    }
  }