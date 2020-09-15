import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { ForgotPage } from "../pages/forgot/ForgotPage";
import { RestorePage } from "../pages/restore/RestorePage";

export default {
    Login: {
        component: LoginPage,
        path: '/login'
    },
    Forgot: {
        component: ForgotPage,
        path: '/forgot'
    },
    Restore: {
        component: RestorePage,
        path: '/res'
    }
};