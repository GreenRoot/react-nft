function Card({ id, link, img, name, price }) {
	return (
		<a key={id} target="_blank" href={link} className="card">
			<div className="card__img">
				<img src={img + '=w500'} alt={name} />
			</div>
			<div className="card__price">{`$ ${price.toFixed(2)}`}</div>
			<div className="card__name">{name}</div>
		</a>
	);
}

export default Card;
