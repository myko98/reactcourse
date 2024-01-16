import './App.css';

function App() {
	return (
		<div className="card">
			<Avatar imgLink="GutsBerserk.png" />
			<div className="data">
				{/* <Intro />
				<SkillList /> */}
			</div>
			<h1>hi</h1>
		</div>
	);
}

function Avatar(props) {
	return <img src={props.imgLink} alt="guts"></img>;
}

function Intro(props) {
	return <div></div>;
}

export default App;
