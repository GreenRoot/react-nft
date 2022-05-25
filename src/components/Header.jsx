function Header() {
	return (
		<header className="header container">
			<ul className="links">
				<li className="link">
					<a href="/" className="link__item">
						Home
					</a>
				</li>
				<li className="link">
					<a href="#about" className="link__item">
						About the project
					</a>
				</li>
				<li className="link">
					<a href="#service" className="link__item">
						Service efficiency
					</a>
				</li>
				<li className="link">
					<a href="#calc" className="link__item">
						NFT search
					</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
