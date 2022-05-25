import Header from './componenst/Header';
import Initial from './componenst/Initial';
import About from './componenst/About';
import Answer from './componenst/Answer';
import NftCalc from './componenst/NftCalc';
import NftWrapper from './componenst/NftWrapper';
import Footer from './componenst/Footer';
import './sass/main.sass';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Initial />
				<About />
				<Answer />
				<section id="calc" className="nft-search container">
					<h2 className="title">NFT Search</h2>
					<NftCalc />
					<NftWrapper />
				</section>
				<Footer />
			</main>
		</>
	);
}

export default App;
