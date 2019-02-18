import _ from 'lodash';
import defaults from '../assets/defaults';

export default function(state = defaults, action) {
		let newState, index;
	switch(action.type) {
		case 'START_QUIZ':
			newState = Object.assign({}, state);
			newState.current = newState.questionsArr[newState.index];

			return newState;
		case 'NEXT_QUESTION':
			// let index;	
			newState = Object.assign({}, state);
			if(newState.index >= newState.questionsArr.length - 1) {
				index = newState.questionsArr.length - 1;
			} else {
				index = newState.index += 1;
			}
			
			newState.current = newState.questionsArr[index];
			console.log(newState);
			return newState;
		case 'PREVIOUS_QUESTION':
			newState = Object.assign({}, state);
			if(newState.index <= 0) {
				index = 0;
			} else {
				index = newState.index -=1;
			}
			
			newState.current = newState.questionsArr[index];
			return newState;
		case 'RESTART_QUIZ':
			newState = Object.assign({}, state);
			newState.index = 0;
			newState.current = newState.questionsArr[newState.index];
			_.map(newState.questionsArr, (el, i) => {
				el.points = [1,2,3,4];
			});
			console.log(newState);
			return newState;
		case 'ANSWER_QUESTION':
			newState = Object.assign({}, state);
			newState.current.points = action.payload;
			return newState;		
	}
	return state;
}