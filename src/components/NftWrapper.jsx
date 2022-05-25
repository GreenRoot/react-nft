import card_01 from '../img/card_01.webp';

// Cards info
const cards = [
	{ img: card_01, price: '35,21', name: 'Stoned Ninjas #2592', link: '#' },
	{ img: card_01, price: '25,55', name: 'Stoned Ninjas #2593', link: '#' },
	{ img: card_01, price: '15,12', name: 'Stoned Ninjas #2594', link: '#' },
	{ img: card_01, price: '55,25', name: 'Stoned Ninjas #2595', link: '#' },
	{ img: card_01, price: '31,02', name: 'Stoned Ninjas #2596', link: '#' },
	{ img: card_01, price: '38,20', name: 'Stoned Ninjas #2597', link: '#' },
	{ img: card_01, price: '88,25', name: 'Stoned Ninjas #2598', link: '#' },
	{ img: card_01, price: '11,25', name: 'Stoned Ninjas #2599', link: '#' },
];

function NftWrapper() {
	return (
		<div style={{ marginTop: 50 + 'px' }} className="nft-wrapper">
			<a href="#" className="back">
				Back to table
			</a>
			<div className="cards">
				{cards.map((index) => (
					<a href={index.link} className="card">
						<div className="card__img">
							<img src={index.img} alt={index.name} />
						</div>
						<div className="card__price">{`$ ${index.price}`}</div>
						<div className="card__name">{index.name}</div>
					</a>
				))}
			</div>
			<button className="btn load-more">Load more</button>
		</div>
	);
}

export default NftWrapper;
