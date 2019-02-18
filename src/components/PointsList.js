import _ from 'lodash';
import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const ListItem = SortableElement(({point, index}) =>
		<li style={{ listStyleType: "none" }} className="point-list-item" key={index}>
			{point}
		</li>
);

const PointsList = SortableContainer(({currentPointsList}) => {
	return (
		<ul className="point-list">
			{_.map(currentPointsList, (point, index) => {
				return (
					<ListItem 
						key={index}
						index={index}
						point={point}
					/>
					)
				})
			}
		</ul>
	)
});

export default PointsList;
