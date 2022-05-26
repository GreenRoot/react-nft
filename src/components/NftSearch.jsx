import NftCalc from "./NftCalc";
import NftWrapper from "./NftWrapper";


function Calc() {
	return (
		<section id="calc" className="nft-search container">
			<h2 className="title">NFT Search</h2>
			<NftCalc />
			<NftWrapper />
		</section>
	);
}

export default Calc;
