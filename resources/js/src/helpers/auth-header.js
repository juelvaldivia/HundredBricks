/**
 * Created by Joel Valdivia
 * Date 05 Jun 2020
 * Description: Se encarga de crear cabecera de autenticacion
 */
export const authHeader =  function () {

    // obtiene info de usuario
    let user = JSON.parse(localStorage.getItem('user'));

    // verifica si existe el usuario y contiene un token
    if (user && user.token)
        // retorna la cabecera con el token
        return { 'Content-Type': 'application/json', 'Authorization': user.token };
    
    // regresa objeto vacío
    return {};
}