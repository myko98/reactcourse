import { useState } from 'react';
function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1)
	const [count, setCount] = useState(0)

	function incStep() {
		setStep((s) => s+1)
	}

	function decStep() {
		setStep((s) => s-1)
	}

	function incCount() {
		setCount( (c) => c+step)
	}

	function decCount() {
		setCount((c) => c-step)
	}

	let date = new Date();
	console.log(date.toString())
	date.setDate(date.getDate() + count)
	console.log(date.toString())
	

	return (
		<>
			<div style={{ display: 'flex' }}>
				<button onClick={decStep}>-</button>
				<p>Step: {step}</p>
				<button onClick={incStep}>+</button>
			</div>

			<div style={{ display: 'flex' }}>
				<button onClick={decCount}>-</button>
				<p>Count: {count}</p>
				<button onClick={incCount}>+</button>
			</div>
			<div>Today is {date.toString()}</div>
		</>
	)
}

export default App;
