import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/kain perfil 2 branco azul.jpeg';
import { AuthContext } from '../../contexts/AuthContext';
import './index.scss';

export default function Header(){

	const [userPerson, setUserPerson] = useState();

	const { signInWithGoogle, user, signOut } = useContext(AuthContext);

	// useEffect(() => {
	// 	setUserPerson(user);
	// },[]);

	async function login(){
		await signInWithGoogle();
	}

	// async function logout(){
	// 	await signOut();
	// }

	return(
		<div className='container'>
			<div className="row py-4">
				<div className='col-12 d-flex align-items-center justify-content-end text-end'>
					<p className='pe-3 lead fs-6'> {user?.name}</p>
					<img className='rounded-circle image-size' src={user?.avatar} alt="#" />
					<button onClick={login}>Login</button>
				</div>
			</div>
		</div>
	);
};