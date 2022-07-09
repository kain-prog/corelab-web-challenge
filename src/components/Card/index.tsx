import './index.scss';

export default function Card(){
	return(
		<div>
			<div className="bg-color">
				<p>RENAULT</p>
			</div>

			<div className="container">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
				 At deleniti, sed id error corporis ducimus.</p>

				<button>Ver mais...</button>
				
				<div className="row">
					<div className="col-md-6">
						<p>Valor</p>
					</div>

					<div className="col-md-6">
						<p>R$300</p>
					</div>

					<div className="col-md-6">
						<p>cor</p>
					</div>

					<div className="col-md-6">
						<p>Vermelho</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<p>1200</p>
						<span>KM</span>
					</div>

					<div className="col-md-4">
						<p>2015</p>
						<span>ANO</span>
					</div>

					<div className="col-md-4">
						<p>1200</p>
						<span>KM</span>
					</div>
				</div>

			</div>
		</div>
	);
};