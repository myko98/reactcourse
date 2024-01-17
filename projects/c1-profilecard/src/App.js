import './App.css';

const skills = [
	{
		skill: 'HTML+CSS',
		level: 'advanced',
		color: 'blue',
	},
	{
		skill: 'Javascript',
		level: 'advanced',
		color: 'blue',
	},
	{
		skill: 'Web design',
		level: 'advanced',
		color: 'blue',
	},
	{
		skill: 'Git and Github',
		level: 'intermediate',
		color: 'blue',
	},
	{
		skill: 'React',
		level: 'advanced',
		color: 'blue',
	},
	{
		skill: 'Svelte',
		level: 'beginner',
		color: 'blue',
	},
];

let intro =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
function App() {
	return (
		<div className="card">
			<Avatar imgLink="GutsBerserk.png" />
			<div className="data">
				<Intro name="Michael" intro={intro} />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar(props) {
	return <img className="avatar" src={props.imgLink} alt="guts"></img>;
}

function Intro(props) {
	return (
		<>
			<h1>{props.name}</h1>
			<p>{props.intro}</p>
		</>
	);
}

function SkillList(props) {
	return (
		<div className="skill-list">
			<Skill color="red" skill="HTML" emoji="&#128513;" />
			<Skill color="red" skill="HTML" emoji="&#128513;" />
			<Skill color="red" skill="HTML" emoji="&#128513;" />
			<Skill color="red" skill="HTML" emoji="&#128513;" />
		</div>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.color }}>
			{props.skill} {props.emoji}
		</div>
	);
}

export default App;
