import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import colorData from './color-data.json';
import ColorList from './components/ColorList';
import { createContext, useState } from 'react';
import AddColorForm from './components/AddColorForm';
import { v4 } from 'uuid';

function App() {
	const [colors, setColors] = useState(colorData);

	return (
		<>
			<AddColorForm/>
			<ColorList/>
		</>
	);
}

export default App;
