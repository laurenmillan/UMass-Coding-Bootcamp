const Tweet = (props) => {
	return (
		<div className="tweet">
			<h1 className="name">
				{props.username} - <b>{props.name}</b>
			</h1>
			<h2 className="message">{props.message}</h2>
			<p>{props.date}</p>
		</div>
	);
};
