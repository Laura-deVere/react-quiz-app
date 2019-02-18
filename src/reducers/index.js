import { combineReducers } from 'redux';
import Results from './reducer_results'
import Quiz from './reducer_quiz';

const rootReducer = combineReducers({
	quiz: Quiz,
	results: Results
});
export default rootReducer;