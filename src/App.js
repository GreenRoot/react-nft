import Header from './components/Header';
import Initial from './components/Initial';
import About from './components/About';
import Answer from './components/Answer';
import NftCalc from './components/NftCalc';
import NftWrapper from './components/NftWrapper';
import Footer from './components/Footer';
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
