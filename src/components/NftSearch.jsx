import React from 'react';

import NftCalcWapper from './NftCalcWapper';
import NftCardsWrapper from './NftCardsWrapper';

function NftSearch() {
	const [showCards, setShowCards] = React.useState(false);

	return (
		<section id="calc" className="nft-search container">
			<h2 className="title">NFT Search</h2>
			{showCards ? (
				<NftCardsWrapper showCards={showCards} setShowCards={setShowCards} />
			) : (
				<NftCalcWapper showCards={showCards} setShowCards={setShowCards} />
			)}
		</section>
	);
}

export default NftSearch;
