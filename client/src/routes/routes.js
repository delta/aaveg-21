import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'
import { QuizAttempted } from '../pages/QnA-Attempted'

export const publicRoutes = [
  {
    url: '/',
    component: Home
  },
  {
    url: '/login',
    component: Login
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
