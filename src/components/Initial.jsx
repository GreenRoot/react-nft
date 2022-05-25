import initialImg from '../img/initial.webp';
import initialImg425 from '../img/initial-425.webp';

function Initial() {
	return (
		<section className="initial">
			<div className="initial__wrapper container">
				<a href="#calc" className="initial__img">
					<div className="initial__img-aura"></div>
					<picture>
						<source media="(max-width: 425px)" srcset={initialImg425} />
						<img src={initialImg} alt="Build a profitable NFT" />
					</picture>
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
