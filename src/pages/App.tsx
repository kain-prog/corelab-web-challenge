import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Home(){
	
	const { signInWithGoogle, user, signOut } = useContext(AuthContext);

	async function login(){
		await signInWithGoogle();
	}

	async function logout(){
		await signOut();
	}
    
	return(
		<div>
            Hola
			<button onClick={login}>ME CLICA</button>
			<button onClick={logout}>Partiu deixar o sistema</button>
		</div>
	);
}