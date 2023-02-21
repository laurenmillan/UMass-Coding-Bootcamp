const App = () => (
	<div>
		<Tweet username="@maryNberry" name="Mary" date="May 31, 2019" message="First Tweet!" />
		<Tweet username="@joejoe123" name="Joe" date="June 13, 2020" message="What's Up?!" />
		<Tweet username="@catzrule*" name="Harry" date="July 4, 2021" message="Fireworks!" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
