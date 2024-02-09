import { useState, useEffect } from 'react';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
	const [amount, setAmount] = useState('');
	const [currOne, setCurrOne] = useState('USD');
	const [currTwo, setCurrTwo] = useState('USD');
	const [output, setOutput] = useState(amount);

	useEffect(
		function () {
			console.log('working');

			const fetchData = async () => {
				const response = await fetch(
					`https://api.frankfurter.app/latest?amount=${amount}&from=${currOne}&to=${currTwo}`
				);
				const jsonData = await response.json();

				console.log(jsonData.rates[currTwo]);
				setOutput(jsonData.rates[currTwo]);
			};

			if (currOne !== currTwo && amount !== '') {
				fetchData();
			} else if (currOne === currTwo) {
				setOutput(amount);
			} else {
				setOutput('');
			}
		},
		[amount, currOne, currTwo]
	);
	return (
		<div>
			<input
				value={amount}
				type="text"
				onChange={(e) => setAmount(e.target.value)}
			/>
			<select value={currOne} onChange={(e) => setCurrOne(e.target.value)}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select value={currTwo} onChange={(e) => setCurrTwo(e.target.value)}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>{output}</p>
		</div>
	);
}
