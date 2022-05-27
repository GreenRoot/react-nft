import Calc from './Calc';

function NftCalcWapper() {
	return (
		<>
			<div className="nft-calc">
				<div className="nft-calc__prewiew">
					<h3 className="nft-calc__title">Fill out the form</h3>
					<div className="nft-calc__arrow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none">
							<path
								d="M9.33325 4.66675L18.6666 14.0001L9.33325 23.3334"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
				<Calc />
			</div>
		</>
	);
}

export default NftCalcWapper;