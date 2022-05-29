import styles from './Card.module.sass';

function Card({ id, link, img, name, price }) {
	return (
		<a key={id} target="_blank" href={link} className={styles.card}>
			<div className={styles.img}>
				<img src={img + '=w500'} alt={name} />
			</div>
			<div className={styles.price}>{`$ ${price.toFixed(2)}`}</div>
			<div className={styles.name}>{name}</div>
		</a>
	);
}

export default Card;
