// method 1 (importing directly from components) ----->
// import Login from "../components/login.component";
// import SignUp from "../components/signup.component";


// method 2 (importing in index.js of components and exporting from there) ----->
// import { Login, SignUp } from "../components/index";


//method 3 (directly exporting from index.js of components) ----->
import { Login, SignUp } from "../components";

import {urls} from "../config";

const routes = [
    {
        path: urls.home,
        exact: true,
        component: Login
    },
    {
        path: urls.signIn,
        exact: true,
        component: Login
    },
    {
        path: urls.signUp,
        exact: true,
        component: SignUp
    }
];

export default routes;