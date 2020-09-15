/**
 * Created by: Joel Valdivia
 * Date: 29 Mayo 2020
 */

// importa las librerias de redux
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

// crea un logger en la App sobre redux
const loggerMiddleware = createLogger();

// Crea el almacenamiento de la app
// con los reducers que se estarán encargando de
// actualizar una parte de la app con sus respectivas acciones
export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);