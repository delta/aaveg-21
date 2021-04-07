import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'

export const publicRoutes = [
    {
        url: "/",
        component: Home
    },
    {
        url: "/login",
        component: Login
    }
];

export const privateRoutes = [
    {
        url: "/quiz",
        component: QnAPage
    }

];

export const adminRoutes = [

];