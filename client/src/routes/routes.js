import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QnAPage } from '../pages/QnA'
import { QuizAttempted } from '../pages/QnA-Attempted'
import { Seniors } from '../pages/Seniors'
import { WebmailError } from '../pages/Webmail'

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
  },
  {
    url: '/webmail',
    component: WebmailError
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
