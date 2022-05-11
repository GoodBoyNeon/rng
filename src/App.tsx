import { useState, useEffect } from "react";
import "./style.css";

function App() {
	useEffect(() => {
		document.title = "Random Number Generator";
	}, []);
	const [count, setCount] = useState(() => {
		return "";
	});

	const GenerateRandomNumber = () => {
		const min: any = document.getElementById("min");
		const max: any = document.getElementById("max");
		const randomNumber =
			Math.floor(Math.random() * (max.value - min.value)) + Number(min.value);
		return randomNumber.toString();
	};

	function setRandomValue() {
		setCount(GenerateRandomNumber());
	}
	return (
		<div className="App">
			<h1 className="title">Random Number Generator</h1>
			<div className="container">
				<h4 className="result-label">Random Number</h4>
				<div className="result-box">
					<p className="result-text">{count}</p>
				</div>
				<div className="opt">
					<label htmlFor="min">Minimum Value:</label>
					<input type="number" name="min" id="min" defaultValue="1" />
				</div>
				<div className="opt">
					<label htmlFor="max">Maximum Value:</label>
					<input type="number" name="max" id="max" defaultValue="10" />
				</div>
				<div className="gen-btn">
					<button className="generate" id="gen" onClick={setRandomValue}>
						Generate Number
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
