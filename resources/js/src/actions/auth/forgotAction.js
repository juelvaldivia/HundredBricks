import { forgotRequest, forgotSuccess, forgotFailure } from "../../redux/ducks/forgotDucks";
import { HttpService } from "../../services/HttpService";
import { loadingHide } from "../../redux/ducks/loadingDucks";
import { modalSuccess, modalError } from "../../redux/ducks/modalDucks";

/**
* Created by Joel Valdivia
* Date 09 Jun 2020
* 
* Funcion para realizar una peticion http POST y obtener token
* @param {Object} dispatch funcion que dispara acciones de Redux
*/
export const forgotAction = async (dispatch, username) => {

    // dispara accion para saber que se realiza una peticion HTTP
    dispatch(forgotRequest(username));
  
    try {
      // realiza petición Http
      const forgotResponseData = await HttpService('/auth/forgot', 'POST', username);
  
      // dispara los datos al store de redux
      dispatch(forgotSuccess(forgotResponseData.message));
      dispatch(loadingHide())
      dispatch(modalSuccess({ title: 'Solicitud para restablecer contraseña', body: forgotResponseData.message }));
  
    } catch (error) {
      dispatch(loadingHide())
      // dispara el error
      dispatch(forgotFailure(error));
      // muestra modal con error
      dispatch(modalError({ title: 'Error al restablecer contraseña', body: error }));
  
    }
  }