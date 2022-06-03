import { Routes, Route } from 'react-router-dom';

import AboutTheProject from './pages/AboutTheProject';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import ServiceEfficiency from './pages/ServiceEfficiency';
import TestPage from './pages/TestPage';
import './sass/main.sass';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<AboutTheProject />} />
			<Route path="/service-efficiency" element={<ServiceEfficiency />} />
			<Route path="/search" element={<Search />} />
			<Route path="/test" element={<TestPage />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
