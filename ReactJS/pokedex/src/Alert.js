import React from 'react';

const Alert = ({ variant = 'success', children }) => {
	const colors = {
		success: 'green'
	};

	return <div style={{ backgroundColor: colors[variant] }}>{children}</div>;
};

export default Alert;
