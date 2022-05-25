function NftCalc() {
	return (
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
			<form action="#" className="calc">
				<h2 className="calc__title">Assemble NFT&nbsp;portfolio</h2>
				<label className="calc__label">
					<div className="calc__text">How much money are you willing to invest?</div>
					<div className="calc__input">
						<span className="calc__input-prefix">$</span>
						<input
							className="calc__input-number"
							type="number"
							defaultValue="1000"
							step="10"
							min="10"
							max="10000000"
						/>
					</div>
				</label>
				<div className="calc-radio">
					<div className="calc-radio__text">What is the level of risk?</div>
					<div className="calc-radio__inputs">
						<label className="radio">
							<input
								defaultChecked
								className="radio__input"
								id="lowRisk"
								type="radio"
								name="risk"
							/>
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Low Risk</span>
						</label>
						<label className="radio">
							<input className="radio__input" id="moderate" type="radio" name="risk" />
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Moderate</span>
						</label>
						<label className="radio">
							<input className="radio__input" id="high" type="radio" name="risk" />
							<span className="radio__imput-radio"></span>
							<span className="radio__label">High</span>
						</label>
						<label className="radio">
							<input className="radio__input" id="veryHigh" type="radio" name="risk" />
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Very high</span>
						</label>
					</div>
				</div>
				<button className="btn btn-calc">Calculate</button>
			</form>
		</div>
	);
}

export default NftCalc;
