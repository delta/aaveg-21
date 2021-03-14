import { WastePage } from '../containers/WastePage'
import { HomePage } from '../containers/HomePage'

export const publicRoutes = [
    {
        url: "/waste",
        component: WastePage
    },
    {
        url: "/",
        component: HomePage
    }
];

export const privateRoutes = [

];

export const adminRoutes = [

];