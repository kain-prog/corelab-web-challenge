export default function VehiclesForm(){
	return(
		<>
			<div className='container'>
				<div className='row'>

					<div className='col-md-6'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>NOME</label>
							<input className='dark' type="text" name='' id='' />
						</div>
					</div>

					<div className='col-md-6'>
						<div className='d-flex flex-column'>
							<label className='dark' htmlFor=''>MODELO</label>
							<input className='dark' type="text" name='' id='' />
						</div>
					</div>

				</div>
			</div>
		</>
	);
};