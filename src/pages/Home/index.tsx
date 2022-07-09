import { useContext } from 'react';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
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
		<>
			<div className='container'>
				<div className='row'>
					<input type="text" name="" id="" className='w-100 dark' />
				</div>
			</div>

			<Filter/>

			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<Card/>
					</div>
				</div>
			</div>
		</>

	);
}