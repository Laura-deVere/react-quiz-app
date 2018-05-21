import React, { Component } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import AnswerList from './AnswerList';
import PointsList from './PointsList';

class QuestionsList extends Component {
	onSortEnd({oldIndex, newIndex}) {
		const newOrder = arrayMove(this.props.current.points, oldIndex, newIndex);
		this.props.handleAnswerQuestion(newOrder);
	}
	render() {
		const currentAnswersList = this.props.current.answers;
		const currentPointsList = this.props.current.points;
		return (
			<div className="quiz-container">
				<button className="restart-button" onClick={this.props.handleRestart}>RESTART</button>
				<p>
					Order numbers - 4 = most relatable : 1 = least relatable
				</p>
				<div className="answer-container">
					<AnswerList currentAnswersList={currentAnswersList} />
					<PointsList currentPointsList={currentPointsList} onSortEnd={this.onSortEnd.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default QuestionsList;