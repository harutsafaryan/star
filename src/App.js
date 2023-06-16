import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import colorData from './color-data.json';
import ColorList from './components/ColorList';
import { useState } from 'react';

function App() {
	const [colors, setColors] = useState(colorData);

	return (
		<ColorList
			colors={colors}
			onRateColor={(id, rating) => {
				const newColors = colors.map(color => color.id == id ? { ...color, rating } : color);
				setColors(newColors)
			}}

			onRemoveColor={id => {
				const newColors = colors.filter(color => color.id != id);
				setColors(newColors)
			}}
		/>
	);
}

export default App;
