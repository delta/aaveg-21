import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'

export const publicRoutes = [
<<<<<<< HEAD
  {
    url: '/',
    component: Home
  },
  {
    url: '/login',
    component: Login
  }
]
=======
    // {
    //     url: "/waste",
    //     component: WastePage
    // },
    {
        url: "/",
        component: Home
    },
    {
        url: "/login",
        component: Login
    }
];
>>>>>>> feat[slideDrawer]:implement slideDrawer

export const privateRoutes = [
  {
    url: '/quiz',
    component: QnAPage
  }

]

export const adminRoutes = [

]
