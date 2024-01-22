import { useState } from 'react'

function App() {

	const [bill, setBill] = useState("")
	const [myTip, setMyTip] = useState(0)
	const [friendTip, setFriendTip] = useState(0)

	let avgTip = bill * ((myTip + friendTip) / 200)
	let total = Number(bill) + avgTip

	function handleReset() {
		setBill("")
		setMyTip(0)
		setFriendTip(0)
	}
	return (
		<div className="App">
			<Bill bill={bill} setBill={setBill} />
			<Service percentage={myTip} setTip={setMyTip}>How did you like the service?</Service>
			<Service percentage={friendTip} setTip={setFriendTip}>How did your friend like the service?</Service>
			<Outcome total={total} bill={bill} avgTip={avgTip} handleReset={handleReset}/>
		</div>
	);
}

function Bill({ bill, setBill }) {
	return (
		<div>
			<p>How much was the bill</p>
			<input value={bill} onChange={(e) => setBill(e.target.value)} type="input"></input>
		</div>
	)
}

function Service({ children, setTip, percentage }) {
	return (
		<div>
			{children}
			{/* need to set value attribute so that we can reset! */}
			<select value={percentage} onChange={(e) => setTip(Number(e.target.value))}>
				<option value={0} key={1}>It was shit (0)</option>
				<option value={10} key={2}>It was good (10%)</option>
				<option value={20} key={3}>Absolutely amazing! (20%)</option>
			</select>
		</div>
	)
}

function Outcome({ total, bill, avgTip, handleReset }) {
	return (
		<div>
			You pay ${total} (${bill} + ${avgTip} tip)
			<button onClick={handleReset}>Reset</button>
		</div>

	)
}

export default App;
