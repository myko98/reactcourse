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
		color: 'red',
	},
	{
		skill: 'Web design',
		level: 'advanced',
		color: 'green',
	},
	{
		skill: 'Git and Github',
		level: 'intermediate',
		color: 'blue',
	},
	{
		skill: 'React',
		level: 'advanced',
		color: 'orange',
	},
	{
		skill: 'Svelte',
		level: 'beginner',
		color: 'pink',
	},
];

let intro =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
function App() {
	return (
		<div className="card">
			<Avatar imgLink="GutsBerserk.png" />
			<div className="data">
				<Intro name="Michael Chen" intro={intro} />
				<SkillList skills={skills} />
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

function SkillList({ skills }) {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill color={skill.color} skill={skill.skill} emoji={skill.level} />
			))}
		</div>
	);
}

function Skill({ color, skill, emoji }) {
	let icon = '';
	if (emoji === 'beginner') {
		icon = '😓';
	} else if (emoji === 'intermediate') {
		icon = '😊';
	} else {
		icon = '😈';
	}
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			{skill} {icon}
		</div>
	);
}

export default App;
