import { IVehicle } from '../../types/Vehicle';
import BtnRounded from '../Button_rounded';
import '../CardDetail/index.scss';

export default function CardDetail(card: IVehicle){
	return(
		<div className='container-shadow-rounded my-3 pb-2'>
			<div className='bg-color m-0 px-4 d-flex justify-content-between '>

				<div className='text-center align-items-center justify-content-center d-flex'>
					<h5 className='m-0 me-2 fs-6'>NOME :</h5>
					<p >{card.name}</p>
				</div>

				<div className='text-center align-items-center justify-content-center d-flex'>
					<h5 className='mb-0 me-2 fs-6'>MODELO :</h5>
					<p>{card.brand}</p>  
				</div>

				<div className='text-center align-items-center justify-content-center d-flex'>
					<h5 className='m-0 me-2 fs-6'>VALOR :</h5>
					<p>{card.price}</p>
				</div>

			</div>

			<div className='d-flex flex-column px-4'>
            
				<div className='container py-3 text-justify'>
					<p>{card.description}</p>
				</div>

				<div className='d-flex justify-content-between m-0 w-100 details '>
                    

					<div className=' d-flex align-items-center flex-wrap justify-content-between  mx-2'>
						<h6 className='m-0 me-2'>Placa :</h6>
						<p className='fs-6'>{card.plate}</p>
					</div>

					<div className=' d-flex align-items-center flex-wrap justify-content-between  mx-2'>
						<h6 className='m-0 me-2'>Cor :</h6>
						<p className='fs-6'>{card.color}</p>  
					</div>

					<div className='d-flex align-items-center flex-wrap justify-content-between mx-2'>
						<h6 className='m-0 me-2'>Ano de fabricação :</h6>
						<p className='fs-6'>{card.year}</p>
					</div>

					<div className='d-flex align-items-center flex-wrap justify-content-between mx-2'>
						<h6 className='m-0 me-2'>Km Rodados :</h6>
						<p className='fs-6'>{card.km}</p>
					</div>

					<div className=' d-flex justify-content-end'>
						{
							card.btns === 'like' ?
								<BtnRounded ><i className='bi bi-heart fs-4'></i></BtnRounded>
								: <>
									<BtnRounded><i className='bi bi-pencil'></i></BtnRounded>
									<BtnRounded><i className='bi bi-trash'></i></BtnRounded>
								</>
						}
					</div>

				</div>			

			</div>
		</div>
	);
} 