import React from 'react';
import Card from './Cards';
import CardSkeleton from './Cards/CardSkeleton';

function NftCardsWrapper({ showCards, setShowCards, sum, setSum, risk, setRisk }) {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [loadMore, setLoadMore] = React.useState(1);

	// Showing the Skeleton template
	const skeleton = [...new Array(8)].map((_, index) => <CardSkeleton key={index} />);

	// We show ready-made cards received from the server
	const cards = items.map((obj) => <Card key={obj.id} {...obj} />);

	React.useEffect(() => {
		// Requesting data from mockapi.io
		fetch(`https://628f9bfc0e69410599df9bd1.mockapi.io/${risk}?page=${currentPage}&limit=8`)
			.then((res) => res.json())
			.then((arr) => {
				setItems(items.concat(arr));
				//Removing the Skeleton
				setIsLoading(false);
				setCurrentPage((prevState) => prevState + 1);
			});
	}, [loadMore]);

	return (
		<div className="nft-wrapper mt50">
			<div onClick={() => setShowCards(false)} className="back">
				Back to table
			</div>
			<div className="cards">{isLoading ? skeleton : cards}</div>
			<button onClick={() => setLoadMore((prevState) => prevState + 1)} className="btn load-more">
				Load more
			</button>
		</div>
	);
}

export default NftCardsWrapper;
