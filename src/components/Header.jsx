// Links in header
const links = [
	{ id: 'home', name: 'Home' },
	{ id: 'about', name: 'About the project' },
	{ id: 'service', name: 'Service efficiency' },
	{ id: 'calc', name: 'NFT search' },
];

function Header() {
	return (
		<header id="home" className="header container">
			<ul className="links">
				{links.map((index) => (
					<li className="link">
						<a href={`#${index.id}`} className="link__item">
							{index.name}
						</a>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Header;
