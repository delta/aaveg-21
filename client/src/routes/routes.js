import { WastePage } from '../containers/WastePage'
import { HomePage } from '../containers/HomePage'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'

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
    {
        url: "/quiz",
        component: QnAPage
    }

];

export const adminRoutes = [

];