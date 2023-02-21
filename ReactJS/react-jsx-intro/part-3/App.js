const App = () => (
	<div>
		<Person name="Sharrianne" age="23" hobbies={[ 'Biking', 'Hiking' ]} />

		<Person name="Lillianne" age="4" hobbies={[ 'Playing on the swingset', 'Playing with dolls', 'Video Games' ]} />

		<Person name="John" age="55" hobbies={[ 'Rock Climbing', 'Lifting weights' ]} />

		<Person name="Alexander" age="16" hobbies={[ 'Listening to music' ]} />
	</div>
);

// the following line of code is not supported in React 18
// ReactDOM.render(<App />, document.getElementById('root'));

// the following line is supported in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
