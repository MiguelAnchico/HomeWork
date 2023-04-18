import React from 'react';

export const Son = ({ numero, increment }) => {
	console.log('again reloaded...');

	return <button onClick={() => increment(numero)}>{numero}</button>;
};
