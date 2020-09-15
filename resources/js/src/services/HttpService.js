// importa configuracion de la API
import { ConfigApi } from "../config/api.config";
import { logoutAction } from "../actions/auth";

/**
 * Created by Joel Valdivia
 * Date 14 sep 2020
 * 
 * Funcion para realizar peticiones GET de Http y trata las respuestas
 * @param {String} endpoint endpoint de API
 */
export const HttpService = async (endpoint, method = 'GET', data = null, headers = null) => {
    // se declaran las opciones de la peticion http
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // verifica si data contiene información y agrega a body
    if (data)
        options.body = JSON.stringify(data);
    // verifica si data contiene headers
    if (headers)
        options.headers = headers;

    const API_URL = endpoint.includes('://') ? endpoint : `${ConfigApi.url}${endpoint}`;
    // console.log(options)
    return await fetch(API_URL, options)
        .then(response => {
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    if (response.status === 401) {
                        // elimina informacion de localstorage
                        logoutAction();

                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    // verifica el codigo error de errores en la peticion
                    if (response.status === 422) {
                        // regresa error para ser mostrado
                        const error = (data && data.errors[Object.keys(data.errors)[0]][0]) || response.statusText;
                        return Promise.reject(error);
                    }

                    // en caso de cualquien otro error lo regresa
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                return data;
            });
        })
        .then(
            response => {
                // responde con los datos correctos y en Json
                return response;
            }
        )

}

