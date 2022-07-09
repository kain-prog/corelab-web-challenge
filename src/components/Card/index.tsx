import Button from '../Button_primary';
import BtnRounded from '../Button_rounded';
import './index.scss';

type Card = {
	nome: string;
	modelo: string;
	descricao: string;
	valor: string;
	cor: string;
	km: string;
	ano: string;
	btns: any;
}

export default function Card(card: Card){
	return(
		<div className='container-shadow-rounded'>
			<div className='bg-color'>
				<p>{card.modelo}</p>

				<div className='float-title'>
					<p>{card.nome}</p>
				</div>

			</div>

			<div className='container mt-5 d-flex flex-column align-items-center position-relative'>
				
				<div>
					<p>{card.descricao}</p>
				</div>

				<Button type='submit'>VER MAIS</Button>
				
				<div className='row w-100 mb-3 details'>
					<div className='col-6'>
						<p className='font-weight-bold'>Valor</p>
					</div>

					<div className='col-6 text-end'>
						<p className='font-weight-bold'>{card.valor}</p>
					</div>

					<div className='col-6'>
						<p className='font-weight-bold'>Cor</p>
					</div>

					<div className='col-6 text-end'>
						<p className='font-weight-bold'>{card.cor}</p>
					</div>
				</div>

				<div className='row w-100 sizes'>
					<div className='col-4'>
						<p className='font-weight-bold'>{card.km}</p>
						<span>KM</span>
					</div>

					<div className='col-4 text-center'>
						<p className='font-weight-bold'>{card.ano}</p>
						<span>ANO</span>
					</div>

					<div className='col-4 text-end'>
						<p className='font-weight-bold'>{card.km}</p>
						<span>KM</span>
					</div>
				</div>

				<div className='float-btn'>
					{
						card.btns === 'like' ?
							<BtnRounded><i className='bi bi-heart fs-4'></i></BtnRounded>
							: <BtnRounded><i className='bi bi-heart-fill'></i></BtnRounded>
					}
				</div>

			</div>
		</div>
	);
};