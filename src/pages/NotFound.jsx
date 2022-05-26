import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
	return (
		<>
			<Header />
			<div className="container">
				<h1 style={{ color: '#fff', textAlign: 'center', minHeight: 'calc(100vh - 395px)' }}>
					404
				</h1>
			</div>
			<Footer />
		</>
	);
}

export default NotFound;
