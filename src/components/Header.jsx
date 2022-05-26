// Links in header
const links = [
	{ id: 0, link: 'home', name: 'Home' },
	{ id: 1, link: 'about', name: 'About the project' },
	{ id: 2, link: 'service', name: 'Service efficiency' },
	{ id: 3, link: 'calc', name: 'NFT search' },
];

function Header() {
	return (
		<header id="home" className="header container">
			<ul className="links">
				{links.map((index) => (
					<li key={index.id} className="link">
						<a href={`#${index.link}`} className="link__item">
							{index.name}
						</a>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Header;
