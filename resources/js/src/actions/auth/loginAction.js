import { loginRequest, loginSuccess, loginFailure } from "../../redux/ducks/loginDucks";
import { HttpService } from "../../services/HttpService";
import { loadingHide } from "../../redux/ducks/loadingDucks";
import { modalError } from "../../redux/ducks/modalDucks";

/**
 * Created by Joel Valdivia
 * Date 09 Jun 2020
 * 
 * Funcion para realizar una peticion http POST y obtener token
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
export const loginAction = async (dispatch, history, credentials) => {

    // dispara accion para saber que se realiza una peticion HTTP
    dispatch(loginRequest(credentials.username));
  
    try {
      // realiza petición Http
      const loginResponseData = await HttpService('/auth/login', 'POST', credentials);
  
      // agrega la informacion a local storage
      localStorage.setItem('user', JSON.stringify(loginResponseData.data));
  
      // dispara los datos al store de redux
      dispatch(loginSuccess(loginResponseData));
      dispatch(loadingHide())
      // redirije al inicio
      history.push('/');
  
    } catch (error) {
      dispatch(loadingHide())
      // dispara el error
      dispatch(loginFailure(error));
      // muestra modal con error
      dispatch(modalError({ title: 'Error al iniciar sesión', body: error }));
  
    }
  }