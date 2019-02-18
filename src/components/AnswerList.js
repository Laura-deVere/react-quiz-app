import _ from 'lodash';
import React from 'react';

const AnswerList = ({currentAnswersList}) => {
	return (						
			<ul className="question-list">
				{_.map(currentAnswersList, (answer, index) => {
						return (
							<li className="question-list-item" key={index}>
								{answer}
							</li>
						)
					})
				}
			</ul>
	)
}

export default AnswerList;

