import { START_QUIZ, END_QUIZ, RESTART_QUIZ, NEXT_QUESTION, SELECT_ANSWER } from "../actions";
import * as data from "../../data/data.json";

// initial state
const initialState = {
    questions: data.default.questions,
    currentIndex: 0,
    start: false,
    finish: false,
    isAnswered: false,
    isCorrect: false,
    score: 0
};

// main reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_QUIZ:
            return Object.assign({}, state, {
                currentIndex: 0,
                start: true,
                finish: false,
                isAnswered: false,
                isCorrect: false,
                score: 0
            });
        case END_QUIZ:
            return Object.assign({}, state, {
                finish: true
            });
        case RESTART_QUIZ:
            return Object.assign({}, state, {
                currentIndex: 0,
                start: false,
                finish: false,
                isAnswered: false,
                isCorrect: false,
                score: 0
            });
        case NEXT_QUESTION:
            return Object.assign({}, state, {
                currentIndex: state.currentIndex + 1,
                isAnswered: false,
                isCorrect: false
            });
        case SELECT_ANSWER:
            {
                let results = state;
                if (state.questions && state.questions.length) {
                    const { answerIndex } = state.questions[state.currentIndex];
                    const correct = (action.index === answerIndex);
                    const score = (correct) ? state.score + 1 : state.score;
                    results = Object.assign({}, state, {
                        isAnswered: true,
                        isCorrect: correct,
                        score
                    });
                }
                return results;
            }
        default:
            return state;
    }
};

export default rootReducer;
