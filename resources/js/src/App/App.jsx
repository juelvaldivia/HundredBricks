/**
 * Created by Joel Valdivia
 * Date 05 Jun 2020
 * Description: Componente principal de la WebApp 
 */
import React from 'react';

// importa el historial de la App
import { history } from '../helpers/history';
import LayoutPublic from '../components/layouts/LayoutPublic';
import LayoutPrivate from '../components/layouts/LayoutPrivate';
import { Router, Switch, Route, Redirect } from 'react-router';
import routesPublic from '../routes/routesPublic';
import routesPrivate from '../routes/routesPrivate';

// Componente principal de la WebApp
// Encargara de renderizar los componentes hijos
function App() {

    return (
        <Router history={history}>
            <Switch>
                {
                    // recorre las rutas publicas para agregarlar al router
                    _.map(routesPublic, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) => <LayoutPublic Component={component} route={route} history={history} />}
                            />
                        )
                    })
                }

                {
                    // recorre las rutas privadas para agregarlar al router
                    _.map(routesPrivate, (route, key) => {
                        const { component, path } = route;

                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) =>
                                    localStorage.getItem('user') ?
                                        (  // verifica ruta permitida y la agrga al router
                                            <LayoutPrivate Component={component} route={route} history={history} />
                                        ) :
                                        (   // sino muestra el inicio de sesion
                                            <Redirect to={{ pathname: '/login', state: { from: route.location } }} />
                                        )
                                }
                            />
                        )

                    })
                }
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

// Exporta App
export { App };