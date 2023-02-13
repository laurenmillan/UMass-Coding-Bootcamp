import React from 'react';
import Clicker from './Clicker';

const App = () => (
	<div>
		<EightBall answers="{Answers}" />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
	return (
		<div className="App">
			<EightBall answers="{Answers}" />
			<Clicker />
		</div>
	);
}

export default App;
