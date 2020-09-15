import { HomePage } from "../pages/home/HomePage";
import { UserPage } from "../pages/user/UserPage";

/**
 * Created by Joel Valdivia
 * Date 16 Jun 2020
 * Objeto con las rutas definidas de la App
 */
export default {
    Home: {
        component: HomePage,
        path: '/'
    },
    User: {
        component: UserPage,
        path: '/users'
    }
};