import React from 'react';
import ResultsListItem from './ResultsListItem';

const ResultsList = ({result, reset}) => {
	const type = result.topFruit.type;
	const abilities = result.topFruit.abilities;
	const learn = result.topFruit.learn;
	const trouble = result.topFruit.trouble;
	const expandStyle = result.topFruit.expandStyle;
	const img = result.topFruit.image;

	const abilitiesHdrStr = 'Natural abilities include:';
	const learnHdrStr = `${type} learns best when they:`;
	const troubleHdrStr = `${type} may have trouble: `;
	const expandStyleHdrStr = `To expand their styles, ${type} need to:`;

	const divStyle = {
		width: '100%',
		height: '80px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly'
	}

	

	return (
		<div className="results-container">
			<i className="fas fa-undo" id="restart-icon" onClick={reset}></i>
			<div style={divStyle}>
				<p>YOU ARE A: {type}</p>
				<img className="result-img" src={img} />
			</div>
			<div style={divStyle}>
				<ResultsListItem data={abilities} hdrStr={abilitiesHdrStr} />
				<ResultsListItem data={learn} hdrStr={learnHdrStr} />
				<ResultsListItem data={trouble} hdrStr={troubleHdrStr} />
				<ResultsListItem data={expandStyle} hdrStr={expandStyleHdrStr} />
			</div>
		</div>
	)
}

export default ResultsList;