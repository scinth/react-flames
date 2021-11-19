import React, { useState } from 'react';
import FlamesForm from './FlamesForm';
import FlamesResults from './FlamesResults';

export default function App() {
	const [results, setResults] = useState([]);

	const updateResults = result => {
		let newResults = [result, ...results];
		setResults(newResults);
	};

	return (
		<>
			<section title="form-section">
				<h1 className="flames-title">
					<span>F</span>
					<span>L</span>
					<span>A</span>
					<span>M</span>
					<span>E</span>
					<span>S</span>
				</h1>
				<FlamesForm updateResults={updateResults} />
			</section>
			<section title="results-section">
				<h1 className="results-title">RESULTS</h1>
				<FlamesResults results={results} />
			</section>
		</>
	);
}
