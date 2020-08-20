// method 1 (importing directly from components) ----->
// import Login from "../components/login.component";
// import SignUp from "../components/signup.component";


// method 2 (importing in index.js of components and exporting from there) ----->
// import { Login, SignUp } from "../components/index";


//method 3 (directly exporting from index.js of components) ----->
import { Login, SignUp, About, Profile, Calculator, Todo } from "../components";

import {urls} from "../config";

const routes = [
    {
        path: urls.home,
        exact: true,
        isProtected: false,
        component: About
    },
    {
        path: urls.signIn,
        exact: true,
        isProtected: false,
        component: Login
    },
    {
        path: urls.signUp,
        exact: true,
        isProtected: false,
        component: SignUp
    },
    {
        path: urls.profile,
        exact: true,
        isProtected: true,
        component: Profile
    },
    {
        path: urls.calculator,
        exact: true,
        isProtected: true,
        component: Calculator
    },
    {
        path: urls.todo,
        exact: true,
        isProtected: true,
        component: Todo
    }
];

export default routes;