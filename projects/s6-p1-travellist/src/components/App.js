import { useState } from 'react';
import Logo from './Logo.js'
import Form from './Form.js'
import PackingList from './PackingList.js';
import Stats from './Stats.js';

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "Charger", quantity: 12, packed: false },
// ];


export default function App() {

	// state used in both Form and PackingList component
	const [items, setItems] = useState([])


	function handleAddItems(item) {
		setItems((items) => [...items, item])
	}

	function handleDeleteItem(itemToDel) {
		setItems(items => items.filter((item) => item !== itemToDel))
	}

	// REVIEW THIS!
	function handleToggleItem(id) {
		setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
	}

	function handleClearList() {
		setItems([])
	}

	return (
		<div className="app">
			<Logo />
			<Form items={items} onAddItems={handleAddItems} />
			<PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
			<Stats items={items} />
		</div>
	)
}

