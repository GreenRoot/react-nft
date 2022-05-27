import React from 'react';
import Card from './Cards';
import CardSkeleton from './Cards/CardSkeleton';

function NftCardsWrapper({ showCards, setShowCards }) {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	// Showing the Skeleton template
	const skeleton = [...new Array(8)].map((_, index) => <CardSkeleton key={index} />);

	// We show ready-made cards received from the server
	const cards = items.map((obj) => <Card key={obj.id} {...obj} />);

	React.useEffect(() => {
		// Showing the Skeleton
		setIsLoading(true);
		// Requesting data from mockapi.io
		fetch('https://628f9bfc0e69410599df9bd1.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				//Removing the Skeleton
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="nft-wrapper mt50">
			<div onClick={() => setShowCards(false)} className="back">
				Back to table
			</div>
			<div className="cards">{isLoading ? skeleton : cards}</div>
			<button className="btn load-more">Load more</button>
		</div>
	);
}

export default NftCardsWrapper;
