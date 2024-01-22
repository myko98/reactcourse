import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState("")
	const [amount, setAmount] = useState(1)


	function handleSubmit(e) {
		// prevent page from refreshing when we submit the form
		e.preventDefault()

		// if input box is empty, do nothing
		if (!description) return;

		const newItem = { description, amount, packed: false, id: Date.now() }

		onAddItems(newItem)
		setDescription("")
		setAmount(1)
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select value={amount} onChange={(e) => setAmount(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, index) => index + 1)
					.map(x => <option value={x} key={x}>{x}</option>)}
			</select>
			<input type="text" placeholder="Item to add"
				value={description} onChange={(e) => setDescription(e.target.value)}>
			</input>
			<button>✅</button>
		</form>
	)
}