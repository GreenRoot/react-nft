import React from 'react';

import NftCalcWapper from './NftCalcWapper';
import NftCardsWrapper from './NftCardsWrapper';

function NftSearch() {
	const [showCards, setShowCards] = React.useState(false);
	const [sum, setSum] = React.useState(1000);
	const [risk, setRisk] = React.useState('Low risk');

	console.log(`Risk = ${risk} Sum = ${sum}`);

	return (
		<section id="calc" className="nft-search container">
			<h2 className="title">NFT Search</h2>
			{showCards ? (
				<NftCardsWrapper
					showCards={showCards}
					setShowCards={setShowCards}
					sum={sum}
					setSum={setSum}
					risk={risk}
					setRisk={setRisk}
				/>
			) : (
				<NftCalcWapper
					showCards={showCards}
					setShowCards={setShowCards}
					sum={sum}
					setSum={setSum}
					risk={risk}
					setRisk={setRisk}
				/>
			)}
		</section>
	);
}

export default NftSearch;
