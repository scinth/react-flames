import styled from 'styled-components';

const Form = styled.form`
	--input-indent: 10%;
	width: 100%;

	& label {
		color: #555;
		font-weight: bold;
		margin-left: var(--input-indent);
	}
	& input {
		margin: 0.2em var(--input-indent) 1em;
	}
`;

export const Input = styled.input`
	font-size: 1.3em;
	display: block;
	padding: 0.6em 0.8em;
	width: 80%;
	min-width: 100px;
`;

export const Button = styled.button`
	--width: 200px;
	font-size: 1.3em;
	color: white;
	background-color: #d77;
	min-width: var(--width);
	padding: 0.8em 1em;
	margin: 1em calc((100% - var(--width)) / 2);
	font-weight: bold;
	border: none;
	border-radius: 0.3em;
	cursor: pointer;

	&:hover {
		background-color: #f77;
	}

	&:disabled {
		color: #eee;
		background-color: lightgrey;
		cursor: not-allowed;
	}
`;

export default Form;
