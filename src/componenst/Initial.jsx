import initialImg from '../img/initial.webp';

function Initial() {
	return (
		<section className="initial">
			<div className="initial__wrapper container">
				<a href="#calc" className="initial__img">
					<div className="initial__img-aura"></div>
					<img src={initialImg} alt="Build a profitable NFT" />
				</a>
				<div className="initial__cta cta">
					<h1 className="cta__title">Build a profitable NFT&nbsp;portfolio online</h1>
					<h3 className="cta__subtitle">
						Using effective investment models, the service will select&nbsp;profitable NFTs
					</h3>
					<a href="#calc" className="btn">
						Try Now
					</a>
				</div>
			</div>
		</section>
	);
}

export default Initial;
