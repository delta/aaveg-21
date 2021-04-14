import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'
import { QuizAttempted } from '../pages/QnA-Attempted'
import { Seniors } from '../pages/Seniors'

export const publicRoutes = [
  {
    url: '/',
    component: Home
  },
  {
    url: '/login',
    component: Login
  },
  {
    url: '/seniors',
    component: Seniors
  }
]

export const privateRoutes = [
  {
    url: '/quiz',
    component: QnAPage
  },
  {
    url: '/attempted',
    component: QuizAttempted
  }

]

export const adminRoutes = [

]
