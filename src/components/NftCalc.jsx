import React from 'react';
import { useForm } from 'react-hook-form';

function NftCalc() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			sum: 1000,
			risk: 'LowRisk',
		},
	});
	console.log(errors);

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
			<form
				onSubmit={handleSubmit((data) => {
					alert(`Data ready 
sum: ${data.sum * 1}
risk: ${data.risk}`);
				})}
				className="calc">
				<h2 className="calc__title">Assemble NFT&nbsp;portfolio</h2>
				<label className="calc__label">
					<div className="calc__text">How much money are you willing to invest?</div>
					<div className="calc__input">
						<p className="calc__input-error">{errors.sum?.message}</p>
						<span className="calc__input-prefix">$</span>
						<input
							{...register('sum', {
								required: 'This is required!',
								min: { value: 10, message: 'Min value is $10' },
								max: { value: 10000000, message: 'Max value is $10.000.000' },
							})}
							className="calc__input-number"
							type="number"
						/>
					</div>
				</label>
				<div className="calc-radio">
					<div className="calc-radio__text">What is the level of risk?</div>
					<div className="calc-radio__inputs">
						<label className="radio">
							<input
								{...register('risk', { required: 'This is required!' })}
								className="radio__input"
								type="radio"
								value="LowRisk"
							/>
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Low Risk</span>
						</label>
						<label className="radio">
							<input
								{...register('risk', { required: 'This is required!' })}
								className="radio__input"
								type="radio"
								value="Moderate"
							/>
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Moderate</span>
						</label>
						<label className="radio">
							<input
								{...register('risk', { required: 'This is required!' })}
								className="radio__input"
								type="radio"
								value="High"
							/>
							<span className="radio__imput-radio"></span>
							<span className="radio__label">High</span>
						</label>
						<label className="radio">
							<input
								{...register('risk', { required: 'This is required!' })}
								className="radio__input"
								type="radio"
								value="VeryHigh"
							/>
							<span className="radio__imput-radio"></span>
							<span className="radio__label">Very high</span>
						</label>
					</div>
					<p className="calc__input-error">{errors.risk?.message}</p>
				</div>
				<button className="btn btn-calc">Calculate</button>
			</form>
		</div>
	);
}

export default NftCalc;
