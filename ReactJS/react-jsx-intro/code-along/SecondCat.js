// separate out components

// the first letter must start with a captial
// const SecondCat = () => {
// 	return (
// 		<img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
// 	);
// };

// class based component will call the render method on an instance,
//  get the return value from it and return it to the DOM

class SecondCat extends React.Component {
	render() {
		return (
			<img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
		);
	}
}
