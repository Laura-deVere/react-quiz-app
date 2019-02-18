import _ from 'lodash';
import React, { Component } from 'react';
import Quiz from './Quiz';
import ResultsList from './ResultsList';

import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			showQuiz: true,
			isHidden: false,
			showResults: true
		}
	}

	handleQuizStart() {
		console.log(this.props.quiz);
		this.setState({ 
			showQuiz: false,
			isHidden: true 
		});
	}

	handleReset() {
		this.setState({
			showQuiz: true,
			showResults: true,
			isHidden: false
		});
		
		this.props.clearResults(this.props.quiz.results);
		this.handleRestart();
	}

	componentDidMount() {
		let quiz = this.props;
		this.props.startQuiz(quiz);
	}

	handleNextQuestion() {
		let quiz = this.props;
		this.props.nextQuestion(quiz);
	}

	handlePreviousQuestion() {
		let quiz = this.props;
		this.props.previousQuestion(quiz);
	}

	handleRestart() {
		let quiz = this.props.quiz;
		this.props.restartQuiz(quiz);
	}

	handleAnswerQuestion(pointsArr) {
		let newPointsArr = pointsArr;
		this.props.answerQuestion(newPointsArr);
	}

	handleQuizSubmit() {
		let questionsArr = this.props.quiz.quiz.questionsArr;
		let grape = 0;
		let orange = 0;
		let banana = 0;
		let melon = 0;
		let resultsArr = [];

		_.forEach(questionsArr, (question) => {
			grape += question.points[0];
			orange += question.points[1];
			banana += question.points[2];
			melon += question.points[3];
		});

		resultsArr = [grape, orange, banana, melon];

		this.setState({
			showQuiz: true,
			showResults: false
		});
		console.log(this.props.quiz);
		this.props.getResults(resultsArr);
	}

	render() {
		const showQuiz = this.state.showQuiz;
		const isHidden = this.state.isHidden;
		const showResults = this.state.showResults;
		let index = this.props.quiz.quiz.index;
		let result = this.props.quiz.results;
		let showButton;
		const divStyle = {
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column'
		}

		if(index !== this.props.quiz.quiz.questionsArr.length -1) {
			showButton = (
				<button className="button" onClick={this.handleNextQuestion.bind(this)}>
					<i className="ion-ios-arrow-forward"></i>
				</button>
			)
		} else {
			showButton = (
				<button className="button" onClick={this.handleQuizSubmit.bind(this)}>Submit</button>
			)
		}

		return (				
			<div className="app-container">
				{
					!showQuiz && <div style={divStyle}>	
									<Quiz current={this.props.quiz.quiz.current} 
										handleRestart={this.handleRestart.bind(this)}
											handleAnswerQuestion={this.handleAnswerQuestion.bind(this)} 

										/>
									<div className="btn-container">
										<button className="button" onClick={this.handlePreviousQuestion.bind(this)}>
											<i className="ion-ios-arrow-back"></i>
										</button>
										{showButton}
									</div>
								</div>
				}
				{
					!isHidden && <div className="landing-box">
									<h1>What's your Spirit Fruit?</h1>
									<button className="start-quiz-btn" onClick={this.handleQuizStart.bind(this)}>Start</button>
								</div>
				}	
				{
					!showResults && <ResultsList result={result} reset={this.handleReset.bind(this)}/>
				}			
			</div> 
		)
	}
}

function mapStateToProps(state) {
	return {
		quiz: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		startQuiz: (quiz) => {
			dispatch({
				payload: quiz,
				type: 'START_QUIZ'
			})
		},
		nextQuestion: (quiz) => {
			dispatch({
				payload: quiz,
				type: 'NEXT_QUESTION'
			});
		},
		previousQuestion: (quiz) => {
			dispatch({	
				payload: quiz,
				type: 'PREVIOUS_QUESTION'
			});
		},
		restartQuiz: (quiz) => {
			dispatch({
				payload: quiz,
				type: 'RESTART_QUIZ'
			});
		},
		answerQuestion: (arr) => {
			dispatch({
				payload: arr,
				type: 'ANSWER_QUESTION'
			});
		},
		getResults: (arr) => {
			dispatch({
				payload: arr,
				type: 'GET_RESULT'
			});
		},
		clearResults: (obj) => {
			dispatch({
				payload: obj,
				type: 'CLEAR_RESULTS'
			});
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(App);