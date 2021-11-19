import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
