import { WastePage } from '../containers/WastePage'
import { HomePage } from '../containers/HomePage'
import { Login } from '../components/Login'
import { QnAPage } from '../components/QnA'

export const publicRoutes = [
    {
        url: "/waste",
        component: WastePage
    },
    // {
    //     url: "/quiz",
    //     component: QnAPage
    // },
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