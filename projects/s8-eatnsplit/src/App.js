import { useState } from 'react'
const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

function FriendsList({ friends, onSelectFriend, selectedFriend }) {

	return (
		<ul>{friends.map((friend) =>
			<Friend
				friend={friend}
				key={friend.id}
				onSelectFriend={onSelectFriend}
				selectedFriend={selectedFriend}
			/>)}
		</ul>
	)
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
	let color = (friend.balance === 0) ? "" : (friend.balance < 0) ? "red" : "green"
	let message = (friend.balance === 0) ? `You and ${friend.name} are even` :
		(friend.balance < 0) ? `You owe ${friend.name} ${friend.balance * -1}` : `${friend.name} owes you ${friend.balance}`


	const isSelected = selectedFriend?.id === friend.id


	return (
		<li className={isSelected ? "selected" : ""}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			<p className={color}>{message}</p>
			<Button onClick={() => onSelectFriend(friend)}>{isSelected ? "Close" : "Select"} </Button>
		</li>
	)
}



function FormAddFriend({ onAddFriend }) {

	const [friendName, setFriendName] = useState("")
	const [url, setUrl] = useState("")

	const id = crypto.randomUUID

	function handleSubmit(e) {
		e.preventDefault();

		// return nothing if name or url are empty
		if (!friendName || !url) return;

		const newFriend = {
			id,
			name: friendName,
			image: `https://i.pravatar.cc/48?${url}`,
			balance: 0
		}

		onAddFriend(newFriend)
		setFriendName("")
		setUrl("")
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label> Friend Name</label>
			<input value={friendName} onChange={(e) => setFriendName(e.target.value)} type='text' />
			<label> Image URL</label>
			<input value={url} onChange={(e) => setUrl(e.target.value)} text="text" />
			<Button>Add</Button>
		</form>
	)
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState("")
	const [yourExpense, setYourExpense] = useState("")
	const friendExpense = bill ? bill - yourExpense : ""
	const [whoPays, setWhoPays] = useState("user")

	function handleSubmit(e) {
		e.preventDefault()

		if (!bill || !yourExpense) return
		onSplitBill(whoPays === 'user' ? friendExpense : -yourExpense)
	}
	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {selectedFriend.name}</h2>

			<label> Bill Value</label>
			<input
				text="text"
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>

			<label> Your Expense</label>
			<input text="text" value={yourExpense} onChange={(e) => e.target.value > bill ? yourExpense : setYourExpense(Number(e.target.value))} />

			<label> {selectedFriend.name}'s expense</label>
			<input disabled text="text" value={friendExpense} />

			<label> Who's paying the bill?</label>
			<select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>
			<Button>Split bill</Button>

		</form>
	)
}

function Button({ children, onClick }) {
	return <button onClick={onClick} className="button" > {children}</button >
}

function App() {
	const [showAddFriend, setShowAddFriend] = useState(false)
	const [friends, setFriends] = useState(initialFriends)
	const [selectedFriend, setSelectedFriend] = useState(null)

	// make handler function to be passed as onClick function to create cleaner code!
	function handleShowAddFriend() {
		setShowAddFriend((show) => !show)
	}

	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend])
		setShowAddFriend(false)
	}

	function handleSelectFriend(friend) {
		setSelectedFriend((curr) => curr?.id === friend.id ? null : friend)
		setShowAddFriend(false)
	}

	function handleSplitBill(value) {
		console.log(value)
		setFriends(friends =>
			friends.map((friend) =>
				(friend.id === selectedFriend.id) ? { ...friend, balance: friend.balance + value } : friend
			))

		setSelectedFriend(null)
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friends={friends} onSelectFriend={handleSelectFriend} selectedFriend={selectedFriend} />
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
			</div>
			{selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
		</div>
	)
}

export default App;