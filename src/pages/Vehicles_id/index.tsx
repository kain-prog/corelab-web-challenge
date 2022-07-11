import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';
import Title from '../../components/Title';

export default function Vehicles_id(){

	const { vehicle_id } = useParams();

	console.log('id :', vehicle_id);

	// useEffect(() => {
	// 	document.body.style.background = 'red';
	//   }, ['red']);


	return(
		<>
			<div className='container'>
				<Title title='Detalhes do carro' />
			</div>

			<div  className='col-md-8 mt-5 mx-auto'>
				<CardDetail
					id={2}
					name='Teste'
					brand='Teste'
					description='Teste'
					price={1111}
					color='Teste'
					plate='KZY-7889'
					year={2022}
					km={68000}
					btns={ 'like' }
				/>
			</div>

		</>
	);
};