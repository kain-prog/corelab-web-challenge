import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Home(){
	
	const { signInWithGoogle, signOut } = useContext(AuthContext);

	async function login(){
		await signInWithGoogle();
	}

	async function logout(){
		await signOut();
	}
    
	return(
		<div>

		</div>
	);
}