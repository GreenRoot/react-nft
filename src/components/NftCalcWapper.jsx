import NftCalcPrewiew from './NftCalcPrewiew';
import Calc from './Calc';

function NftCalcWapper() {
	return (
		<>
			<div className="nft-calc">
				<NftCalcPrewiew />
				<Calc />
			</div>
		</>
	);
}

export default NftCalcWapper;
