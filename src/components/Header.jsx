import { Link } from 'react-router-dom';

// Links in header
const links = [
	{ id: 0, link: '/', name: 'Home' },
	{ id: 1, link: '/about', name: 'About the project' },
	{ id: 2, link: '/service-efficiency', name: 'Service efficiency' },
	{ id: 3, link: '/search', name: 'NFT search' },
];

function Header() {
	return (
		<header id="home" className="header container">
			<ul className="links">
				{links.map((index) => (
					<li key={index.id} className="link">
						<Link to={index.link} className="link__item">
							{index.name}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Header;
