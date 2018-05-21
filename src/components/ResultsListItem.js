import _ from 'lodash';
import React from 'react';

const ResultsListItem = ({data, hdrStr}) => {
	return (
		<div className="results-list-div">
			<h3>{hdrStr}</h3>
			<ul>
				{_.map(data, (item, index) => {
					return (
						<li key={index}><i className="ion-android-arrow-dropright"></i>
							  {item}
						</li>
					)
					})
				}
			</ul>
		</div>
	)
}

export default ResultsListItem;