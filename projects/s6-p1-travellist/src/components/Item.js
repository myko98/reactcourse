export default function Item({ item, onDeleteItems, onToggleItem }) {
	return (
		<li>
			<input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.amount} {item.description}</span>
			<button onClick={() => onDeleteItems(item)}>❌</button>
		</li>
	);
}
