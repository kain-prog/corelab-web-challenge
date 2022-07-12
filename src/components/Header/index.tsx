import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginImg from '../../assets/kain perfil 2 branco azul.jpeg';
import { AuthContext } from '../../contexts/AuthContext';
import { IUser } from '../../types/User';
import './index.scss';

export default function Header(){

	// const [userPerson, setUserPerson] = useState<IUser>();

	const { signInWithGoogle, user, signOut } = useContext(AuthContext);

	// useEffect(() => {
	// 	setUserPerson(user);
	// },[]);

	async function login(){
		await signInWithGoogle();
	}

	async function logout(){
		await signOut();
	}

	return(
		<div className='container'>
			<div className='row py-4'>
				<div className='col-12 d-flex align-items-center justify-content-between'>
					
					<div className=''>
						<ul className='nav d-flex'>
							<li className='nav-item'><NavLink className='nav-link text-dark' to='/'>Home</NavLink></li>
							<li className='nav-item'><NavLink className='nav-link text-dark' to={`/favorite/${user?.id}`}> Meus Favoritos </NavLink></li> 
							<li className='nav-item'><NavLink className='nav-link text-dark' to={`/adverts/${user?.id}`}> Meus Anúncios</NavLink></li>
						</ul>
						
					</div>

					<div className='d-flex align-items-center justify-content-center'>
						{user !== undefined ? (
							<>
								<p className='pe-3 lead fs-6'> {user?.name}</p>
								<img className='rounded-circle image-size' src={user?.avatar} alt='#' />
							</>
						) : 
							<button onClick={login}>login</button>	
						}
					</div>
							
				</div>
			</div>
		</div>
	);
};