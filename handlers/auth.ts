import { Handler } from '../types'
import { getUser } from '../data/users'

export const login: Handler = (req,res) => {
	const { username, password } = req.body
	const found = getUser( { username, password } )
	if ( !found ) { return res.status( 401 ).send( 'login failed' ) }
	res.status(200).send('success')
}
