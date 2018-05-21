import _ from 'lodash';
import data from '../assets/resultsData';

export default function(state = {data}, action) {
	let newState;
	let payload = action.payload;
	switch(action.type) {
		case 'GET_RESULT':
		newState = Object.assign({}, state);

		for(var i = 0; i < payload.length; i++) {
			newState.data[i].points = action.payload[i];
		}
		var max = 0;
		var yourResult;

		_.map(newState.data, (data, index) => {			
			if(data.points > max) {
				max = data.points;
				yourResult = data;
			}
		});

		newState.topFruit = yourResult;

		return newState;
	}
	return state;
}