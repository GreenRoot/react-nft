import React from 'react';
import { useForm } from 'react-hook-form';

function Calc({ showCards, setShowCards }) {
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

	function pushData() {
		return handleSubmit((data) => {
			console.log(`Data ready sum: ${data.sum * 1}risk: ${data.risk}`);
			setShowCards(true);
		});
	}

	return (
		<form onSubmit={pushData()} className="calc">
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
	);
}

export default Calc;
