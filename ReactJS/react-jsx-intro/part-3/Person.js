const Person = (props) => {
	console.log(props);

	let hobbies = props.hobbies.map((hobbies) => <li>{hobbies}</li>);

	return (
		<div class="container-fluid">
			<p>Learn some information about this person: </p>
			<li>Name: {props.name.slice(0, 6)}</li>
			<li>Age: {props.age}</li>
			<h3 class="alert alert-info" role="alert">
				{props.age >= 18 ? 'Please go vote!' : 'You must be 18'}
			</h3>
			<ul class="container-fluid">Hobbies: {hobbies}</ul>
			<hr />
		</div>
	);
};
