import React from 'react';

import NftCalcWapper from './NftCalcWapper';
import NftCardsWrapper from './NftCardsWrapper';

function Calc() {
	const [showCards, setShowCards] = React.useState(true);

	return (
		<section id="calc" className="nft-search container">
			<h2 className="title">NFT Search</h2>
			{showCards ? <NftCardsWrapper show={showCards} /> : <NftCalcWapper />}
		</section>
	);
}

export default Calc;
