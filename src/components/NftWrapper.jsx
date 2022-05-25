import card_01 from '../img/card_01.webp';

function NftWrapper() {
	return (
		<div style={{ marginTop: 50 + 'px' }} className="nft-wrapper">
			<a href="#" className="back">
				Back to table
			</a>
			<div className="cards">
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
				<a href="#" className="card">
					<div className="card__img">
						<img src={card_01} alt="nft" />
					</div>
					<div className="card__price">35,25 $</div>
					<div className="card__name">Stoned Ninjas #2592</div>
				</a>
			</div>
			<button className="btn load-more">Load more</button>
		</div>
	);
}

export default NftWrapper;
