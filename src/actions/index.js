export function startQuiz(quiz) {
	return {
		type: 'START_QUIZ',
		payload: quiz
	};
}

export function nextQuestion(quiz) {
	return {
		type: 'NEXT_QUESTION',
		payload: quiz
	}
}

export function previousQuestion(quiz) {
	return {
		type: 'PREVIOUS_QUESTION',
		payload: quiz
	}
}

export function restartQuiz(quiz) {
	return {
		type: 'RESTART_QUIZ',
		payload: quiz
	}
}