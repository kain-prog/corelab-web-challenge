import { useEffect } from 'react';
import Title from '../../components/Title';
import './index.scss';

export default function Vehicles_id(){


	useEffect(() => {
		document.body.style.background = 'red';
	  }, ['red']);


	return(
		<>
			<div className='bg-all'>
				<div className='container'>
					<Title title='Detalhes do carro' />
				</div>
			</div>

		</>
	);
};