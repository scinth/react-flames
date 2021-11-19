import React, { useState, useEffect } from 'react';
import Input from './Input.styled';
import Button from './Button.styled';
import { flames } from '../utils';

export default function FlamesForm({ updateResults }) {
	const [name1, setName1] = useState('');
	const [name2, setName2] = useState('');
	const [isInvalidInput, setIsInvalidInput] = useState(true);

	useEffect(() => {
		if (!isInvalidInput && (name1 === '' || name2 === '')) setIsInvalidInput(true);
		else if (isInvalidInput && name1 !== '' && name2 !== '') setIsInvalidInput(false);
	}, [name1, name2]);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				if (name1 === '' || name2 === '') return;
				let result = flames(name1, name2);
				setName1('');
				setName2('');
				updateResults(result);
			}}
		>
			<label htmlFor="name1">Enter Name1</label>
			<Input
				id="name1"
				value={name1}
				onChange={e => {
					setName1(e.target.value);
				}}
			/>
			<label htmlFor="name2">Enter Name2</label>
			<Input
				id="name2"
				value={name2}
				onChange={e => {
					setName2(e.target.value);
				}}
			/>
			<Button disabled={isInvalidInput ? true : false}>Burn it!</Button>
		</form>
	);
}
