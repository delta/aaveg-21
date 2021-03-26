import { WastePage } from '../containers/WastePage'
import { HomePage } from '../containers/HomePage'
import { Login } from '../components/Login'

export const publicRoutes = [
    {
        url: "/waste",
        component: WastePage
    },
    {
        url: "/",
        component: HomePage
    },
    {
        url: "/login",
        component: Login
    }
];

export const privateRoutes = [

];

export const adminRoutes = [

];