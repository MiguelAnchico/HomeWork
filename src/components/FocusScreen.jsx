import React, { useRef } from 'react';

export const FocusScreen = () => {
	//Creamos el elemento que almacenara la referencia a nuestro input
	const inputRef = useRef();

	// Se hara un focus en el input almacenado dentro de inputRef
	const onClick = () => {
		inputRef.current.select();
	};
	return (
		<>
			<h1>FocusScreen</h1>
			<hr />
			<input
				ref={inputRef}
				placeholder='Ingrese su Nombre'
				className='form-control'
				type='text'
			/>

			<button onClick={onClick}>Focus</button>
		</>
	);
};
