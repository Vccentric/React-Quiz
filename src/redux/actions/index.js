// Action Types
export const START_QUIZ = "START_QUIZ";
export const END_QUIZ = "END_QUIZ";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const SELECT_ANSWER = "SELECT_ANSWER";

// Action Creators
export const startQuiz = () => ({
    type: START_QUIZ
});

export const endQuiz = () => ({
    type: END_QUIZ
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION
});

export const selectAnswer = (index) => ({
    type: SELECT_ANSWER,
    index
});

/* Example of how the state looks like
    const state = {
        questions: [{
            "question": "How many sides are there in a pentagon?",
            "answerOptions": [
                "4",
                "5",
                "6",
                "7"
            ],
            "answerIndex": 1
        }],
        currentIndex: 0,
        start: false,
        finish: false,
        isAnswered: false,
        isCorrect: false,
        score: 0,
    };
*/
