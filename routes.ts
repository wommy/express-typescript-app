import { Route } from './types'
import { home, signup, login } from './handlers'
import { requestLogger } from './middleware/requestLogger'

export const routes: Route[] = [
	{
		method: 'get',
		path: '/',
		middleware: [],
		handler: home,
	},
	{
		method: 'post',
		path: '/users',
		middleware: [],
		handler: signup,
	},
	{
		method: 'post',
		path: '/login',
		middleware: [requestLogger],
		handler: login,
	},
]
