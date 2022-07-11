import { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/AuthContext';
import { getVehicles } from '../../lib/api';
import { IVehicle } from '../../types/Vehicle';

export default function Adverts(){

	const [ vehicles, setVehicles ] = useState([]);

	const { signInWithGoogle, signOut } = useContext(AuthContext);

	async function login(){
		await signInWithGoogle();
	}

	async function logout(){
		await signOut();
	}

	// Get Vehicles
	async function getAllVehicles() {
		const res = await getVehicles();
		setVehicles(res);
	}

	useEffect(() => {
		getAllVehicles();
	});


	return(
		<>
			<div className='container'>
				<Title title='Meus Anúncios' />
			</div>

			<div className='mt-5 w-100'>
				<Carousel variant='dark'>
					{vehicles.length !== 0 ? vehicles.map((vehicle: IVehicle) => (

						<Carousel.Item key={vehicle.id}>
						
							
							<div  className='col-md-4 m-auto pb-5 px-4'>
								<Card 
									id={vehicle.id}
									name={vehicle.name}
									brand={vehicle.brand}
									description={vehicle.description}
									price={vehicle.price}
									color={vehicle.color}
									plate={vehicle.plate}
									year={vehicle.year}
									km={vehicle.km}
									btns={ '' }
								/>
							</div>

						</Carousel.Item>
					)) : 'Nenhum veículo foi encontrado...'
					}
					
					
				</Carousel>
			</div>
		</>
	);
};