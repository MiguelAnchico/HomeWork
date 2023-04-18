import React, { useCallback, useState } from 'react';
import { Son } from './Son';

export const Father = () => {
	const list = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);

	const increment = useCallback((num) => {
		setValor((valor) => valor + num);
	}, []);

	return (
		<div>
			<h1>Father</h1>
			<p>Total: {valor}</p>
			<hr />

			{list.map((numero, index) => (
				<Son key={index} numero={numero} increment={increment} />
			))}
		</div>
	);
};
