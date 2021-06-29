import { Handler } from './types'
import { addUser, getUser } from './data/users'

export const home: Handler = ( req,res ) => {
	res.send('hello world')
}

export const signup: Handler = ( req,res ) => {
	const { username, password } = req.body
	!username?.trim() || !password?.trim() ? 
		res.status(400).send('bad username or password') :
	addUser({username, password})
	res.status(201).send('user created')
}

export const login: Handler = ( req,res ) => {
	const { username, password } = req.body
	!getUser({username, password}) ? 
		res.status(401).send('login failed') : 
		res.status(200).send('success')
}
