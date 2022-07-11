export default function VehiclesForm(){
	return(
		<>
			<div className='container'>
				<div className='row'>

					<div className='col-md-6 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>NOME</label>
							<input className='dark' type='text' name='' id='' />
						</div>
					</div>

					<div className='col-md-6 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>MODELO</label>
							<input className='dark' type='text' name='' id='' />
						</div>
					</div>

					<div className='col-md-3 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>PREÇO</label>
							<input className='dark' type='text' name='' id='' />
						</div>
					</div>

					<div className='col-md-3 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>COR</label>
							<select name='' id=''>
								<option value='Preto'>Preto</option>
								<option value='Branco'>Branco</option>
								<option value='Prata'>Prata</option>
								<option value='Vermelho'>Vermelho</option>
								<option value='Azul'>Azul</option>
								<option value='Amarelo'>Amarelo</option>
								<option value='Verde'>Verde</option>
								<option value='Marrom'>Marrom</option>
							</select>
						</div>
					</div>

					<div className='col-md-3 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>ANO</label>
							<input className='dark' type='text' name='' id='' />
						</div>
					</div>

					<div className='col-md-3 my-3'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>KM RODADOS</label>
							<input className='dark' type='text' name='' id='' />
						</div>
					</div>

					<div className='col-md-2 text-end w-100 mt-4'>
						<button className='btn border-dark'>Editar/Criar</button>
					</div>

				</div>
			</div>
		</>
	);
};