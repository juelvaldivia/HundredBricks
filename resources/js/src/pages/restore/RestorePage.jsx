/**
 * Created by Joel Valdivia
 * Date 10 Jun 2020
 * Description: Archivo para componetes sobre la pagina de Login
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RestoreForm } from "./RestoreForm";
import { loadingShow } from '../../redux/ducks/loadingDucks';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/ducks/loginDucks';
import { recoverAction } from '../../actions/auth';

/**
 * Componente que renderiza la Pagina de Login
 */
function RestorePage({history, ...props}) {
    // disparador de acciones de redux
    const dispatch = useDispatch();

     // Funciona como constructor
     useEffect(() => {
         // dispara la accion de cerrar sesion al entrar al componente
         dispatch(logout());
         const t = props.route.location.search.slice(3);
         if(!t)
            history.push('/login');
    }, []);
    
    // envía la informacion hacia el servidor para realizar una autenticacion
    const onSubmit = data => {
        data.t = props.route.location.search.slice(3);
        // muestra loading
        dispatch(loadingShow('Procesando solicitud para restablecer la contraseña...'))
        // dispara la accion que se encarga de la peticion Http
        recoverAction(dispatch, history, data);
    }

    return (
        <div className="col-lg-6 offset-lg-3 container-login">
            <h3 >Cambiar contraseña</h3>
            <p>Para cambiar tu contraseña, debes elegir una nueva y asi acceder al consultorio <b>laura.klori.com.mx</b>.</p>
            {/* Componente de Formulario de Login */}
            <RestoreForm onSubmit={onSubmit}/>
            <Link to='/login'>Iniciar sesión</Link>

        </div>
    );
}

export { RestorePage };