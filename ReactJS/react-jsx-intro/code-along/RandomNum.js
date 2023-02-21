const RandomNum = () => {
	const random = Math.floor(Math.random() * 10) + 1;
	return <h3>{random}</h3>;
};
