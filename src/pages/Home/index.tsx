import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../lib/api';
import { IVehicle } from '../../types/Vehicle';

export default function Home(){

	const [ vehicles , setVehicles ] = useState([]);
	
	const { signInWithGoogle, signOut } = useContext(AuthContext);

	async function login(){
		await signInWithGoogle();
	}

	async function logout(){
		await signOut();
	}

	// Get Vehicles
	useEffect(() => {
		api.get('/vehicles')
			.then(response => setVehicles(response.data));
	},[]);
    
	return(
		<>
			<div className='container'>
				<div className='row position-relative'>
					<i className='bi bi-search position-absolute ms-1 my-2 w-auto'></i>
					<input type='text' name='' id='' className='w-100 dark ps-5' />
				</div>
			</div>

			<Filter/>

			<div className='container'>
				<div className='row'>

					{vehicles.length !== 0 ? vehicles.map((vehicle: IVehicle) => (
							
						<div key={vehicle.id} className='col-md-4'>
							<Card 
								nome={vehicle.name}
								modelo={vehicle.brand}
								descricao={vehicle.description}
								valor={vehicle.price}
								cor={vehicle.color}
								km='30000'
								ano='2015'
								btns={vehicle.user_id}
							/>
						</div>
					)) : 'Nenhum veículo foi encontrado...'
					}
					
				</div>
			</div>
		</>

	);
}