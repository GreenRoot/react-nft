// Links in header
const links = [
	{ id: 0, links: 'home', name: 'Home' },
	{ id: 1, links: 'about', name: 'About the project' },
	{ id: 2, links: 'service', name: 'Service efficiency' },
	{ id: 3, links: 'calc', name: 'NFT search' },
];

function Header() {
	return (
		<header id="home" className="header container">
			<ul className="links">
				{links.map((index) => (
					<li key={index.id} className="link">
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
