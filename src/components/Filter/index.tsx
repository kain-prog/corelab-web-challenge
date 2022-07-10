import './index.scss';

export default function Filter(){
	return(
		<div className="w-100 background-dark">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="d-flex flex-column">
							<label className="light" htmlFor="">PREÇO</label>
							<div className='row'>
								<div className='col-md-6'>
									<input className='light' type="text" name="" id="" placeholder='min.' />
								</div>
								<div className='col-md-6'>
									<input className='light' type="text" name="" id="" placeholder='max.' />
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="d-flex flex-column">
							<label className="light" htmlFor="">COR</label>
							<select className="light" name="color" id="">
								<option value="">Vermelho</option>
								<option value="">Azul</option>
							</select>
						</div>
					</div>

					<div className="col-md-3">
						<div className="d-flex flex-column">
							<label className="light" htmlFor="">MODELO</label>
							<select className="light" name="color" id="">
								<option value="">Renault</option>
								<option value="">Honda</option>
							</select>
						</div>
					</div>

					<div className="col-md-3">
						<div className="d-flex flex-column">
							<label className="light" htmlFor="">ANO</label>
							<select className="light" name="color" id="">
								<option value="#">2013</option>
								<option value="#">2015</option>
							</select>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 d-flex justify-content-between'>
						<p>50 resultados</p>
						<p>Limpar.</p>
					</div>
				</div>
			</div>
		</div>
	);
};