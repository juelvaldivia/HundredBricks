/**
 * Created by Joel Valdivia
 * Date 28 Mayo 2020
 * Description: Archivo con todos los reductores que tendrá la App
 */

// BEGIN Librerías de Redux
import { combineReducers } from 'redux';
// END Librerias de Redux

// BEGIN Reductores Creados
import loginReducer from './ducks/loginDucks';
import modalReducer from './ducks/modalDucks';
import loadingReducer from './ducks/loadingDucks';
import forgotReducer from './ducks/forgotDucks';
import recoverReducer from './ducks/recoverDucks';
import tableReducer from './ducks/tableDucks';
import propertyReducer from './ducks/propertyDucks';
import bricksReducer from './ducks/bricksDucks';
import carReducer from './ducks/carDucks';
// END Reductores Creados

// Exporta los reductores combinados en un sólo objeto
export default combineReducers({
    authenticate: loginReducer,
    modal: modalReducer,
    loading: loadingReducer,
    forgot: forgotReducer,
    recover: recoverReducer,
    table: tableReducer,
    property: propertyReducer,
    bricks: bricksReducer,
    car: carReducer,
});
