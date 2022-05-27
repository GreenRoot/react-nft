import NftCalcPrewiew from './NftCalcPrewiew';
import Calc from './Calc';

function NftCalcWapper({ showCards, setShowCards }) {
	return (
		<>
			<div className="nft-calc">
				<NftCalcPrewiew />
				<Calc showCards={showCards} setShowCards={setShowCards} />
			</div>
		</>
	);
}

export default NftCalcWapper;
