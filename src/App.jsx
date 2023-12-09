import { useState } from 'react';
import './App.css';

import { AddCategory } from './components/AddCategory';
import { DisplayGifs } from './components/DisplayGifs';
import { Footer } from './components/Footer';

function App() {
	const [category, setCategory] = useState('trending');

	return (
		<div className="App">
			<h2 className="title">Gif Api</h2>
			<AddCategory setCategory={setCategory} />
			<DisplayGifs category={category} />
			<Footer />
		</div>
	);
}

export default App;
