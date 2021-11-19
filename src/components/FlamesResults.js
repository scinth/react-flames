import React from 'react';
import ResultCard from './ResultCard.styled';
import { v4 } from 'uuid';

export default function FlamesResults({ results }) {
	return (
		<div>
			{results.map((result, index) => {
				return (
					<ResultCard key={index}>
						<p className="namePairs">
							<b>
								{result.name1Pairs.name.map(item => {
									return item.isHit ? (
										<span key={v4()} style={{ color: 'red' }}>
											{item.char}
										</span>
									) : (
										item.char
									);
								})}
							</b>{' '}
							= {result.name1Pairs.pairs}
						</p>
						<p className="namePairs">
							<b>
								{result.name2Pairs.name.map(item => {
									return item.isHit ? (
										<span key={v4()} style={{ color: 'red' }}>
											{item.char}
										</span>
									) : (
										item.char
									);
								})}
							</b>{' '}
							= {result.name2Pairs.pairs}
						</p>
						<p className="total">Total = {result.total}</p>
						<hr />
						<p className="message">"They are {result.message}"</p>
					</ResultCard>
				);
			})}
		</div>
	);
}
