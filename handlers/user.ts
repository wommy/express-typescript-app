import { Handler } from '../types'
import { addUser } from '../data/users'

export const signup: Handler = (req,res) => {
	const { username, password } = req.body
	if ( !username?.trim() || !password?.trim() ) { return res.status(400).send('bad username or password') }
	addUser( { username, password } )
	res.status(201).send('user created')
}
