import React from 'react';
import Card from './Cards';
import CardSkeleton from './Cards/CardSkeleton';

function NftWrapper() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState([true]);

	React.useEffect(() => {
		fetch('https://628f9bfc0e69410599df9bd1.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<div style={{ marginTop: 50 + 'px' }} className="nft-wrapper">
			<a href="#" className="back">
				Back to table
			</a>
			<div className="cards">
				{isLoading
					? [...new Array(8)].map((_, index) => <CardSkeleton key={index} />)
					: items.map((obj) => <Card key={obj.id} {...obj} />)}
			</div>
			<button className="btn load-more">Load more</button>
		</div>
	);
}

export default NftWrapper;
