import styles from './Card.module.sass';

function Card({
	id,
	link,
	img,
	name = 'Name not found',
	price = 'Prise not found',
	risk = 'Low risk',
}) {
	// str "12345669.1" to 12,345,669.10
	// num 1213215.2521 to 1,213,215.25
	function toPrice(price) {
		return parseFloat(price.toString().replaceAll(' ', '').replace(',', '.'))
			.toFixed(2)
			.replace(/\d(?=(\d{3})+\.)/g, '$&,');
	}

	return (
		<a key={id} target="_blank" href={link} className={styles.card}>
			<div className={styles.img}>
				<img src={img + '=w500'} alt={name} />
			</div>
			<div className={styles.status}>
				<div title={`$ ${toPrice(price)}`} className={styles.price}>{`$ ${toPrice(price)}`}</div>
				<div className={styles.risk}>
					<div>{risk}</div>
					<div className={styles.riskStatus}></div>
				</div>
			</div>
			<div title={name} className={styles.name}>
				{name}
			</div>
		</a>
	);
}

export default Card;
