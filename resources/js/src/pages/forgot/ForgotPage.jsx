/**
 * Created by Joel Valdivia
 * Date 10 Jun 2020
 * Description: Archivo para componetes sobre la pagina de Login
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForgotForm } from "./ForgotForm";
import { loadingShow } from '../../redux/ducks/loadingDucks';
import { Link } from 'react-router-dom';
// import { AuthActions } from '../../actions/authActions';+
import { forgotAction } from "../../actions/auth";

/**
 * Componente que renderiza la Pagina de Login
 */
function ForgotPage() {
    // disparador de acciones de redux
    const dispatch = useDispatch();
    
    // envía la informacion hacia el servidor para realizar una autenticacion
    const onSubmit = data => {
        // muestra loading
        dispatch(loadingShow('Procesando solicitud para restablecer la contraseña...'))
        // dispara la accion de la peticion Login
        forgotAction(dispatch, data)
    }

    return (
        <div className="col-lg-6 offset-lg-3 container-login">
            <h3 >Restablecimiento de contraseña</h3>
            <p>Para restablecer tu contraseña, introduce la dirección de 
                correo electrónico que utilizas para iniciar sesión en <b>laura.klori.com.mx</b>.</p>
            {/* Componente de Formulario de Login */}
            <ForgotForm onSubmit={onSubmit}/>
            <Link to='/login'>Iniciar sesión</Link>
        </div>
    );
}

export { ForgotPage };