import NftCalcPrewiew from './NftCalcPrewiew';
import Calc from './Calc';

function NftCalcWapper({ showCards, setShowCards, sum, setSum, risk, setRisk }) {
	return (
		<>
			<div className="nft-calc">
				<NftCalcPrewiew />
				<Calc
					showCards={showCards}
					setShowCards={setShowCards}
					sum={sum}
					setSum={setSum}
					risk={risk}
					setRisk={setRisk}
				/>
			</div>
		</>
	);
}

export default NftCalcWapper;
