import React from "react";
import { hot } from "react-hot-loader";
import { connect } from 'react-redux';
import AnswerOption from "../components/AnswerOption";
import Message from "../components/Message";
import Popup from "../components/Popup";
import QuizInfo from "../components/QuizInfo";
import { startQuiz, endQuiz, nextQuestion, selectAnswer, restartQuiz } from "../actions";
import "../ReactQuiz.css";

// main component containing the entire quiz
const QuizContainer = ({
    questions, currentIndex, score, start, finish, isAnswered, isCorrect, selectedAnswer,
    handleStartClick, handleFinishClick, handleRestartClick, handleNextClick, handleAnswerClick
}) => {
    let element = null;
    const total = questions.length;

    // check which display to render
    if (!start) { // check for beginning start popup
        element = (
            <Popup
                title="Welcome!"
                text="This is a simple quiz application built using React.js"
                buttonText="Start quiz"
                handleButtonClick={handleStartClick}
            />
        );
    } else if (finish) { // check for finish/end of quiz
        const text = `Your final score for this quiz is: ${score}/${total}`;
        element = (
            <Popup
                title="Congratulations!"
                text={text}
                buttonText="Restart Quiz"
                handleButtonClick={handleRestartClick}
            />
        );
    } else { // display question and answers
        const currentQuestion = questions[currentIndex];
        const { question } = currentQuestion;

        // setup the questions's answer options
        const answerOptions = currentQuestion.answerOptions.map(
            (answer, index) => (
                <AnswerOption
                    key={Math.random()}
                    index={index}
                    text={answer}
                    isAnswered={isAnswered}
                    isCorrect={isCorrect}
                    selectedAnswer={selectedAnswer}
                    handleAnswerClick={handleAnswerClick}
                />
            )
        );

        // check which button (next/finish) to display
        const buttonText = ((currentIndex + 1) === total) ? "Finish Quiz" : "Next Question";
        const buttonClick = ((currentIndex + 1) === total) ? handleFinishClick : handleNextClick;

        // setup element
        element = (
            <div id="quiz">
                <QuizInfo
                    count={currentIndex}
                    total={total}
                    score={score}
                    question={question}
                />
                <ul id="answerOptions">{answerOptions}</ul>
                <Message
                    isAnswered={isAnswered}
                    isCorrect={isCorrect}
                />
                <button
                    type="button"
                    className="button"
                    onClick={buttonClick}
                    style={isAnswered ? { display: "block" } : { display: "none" }}
                >
                    {buttonText}
                </button>
            </div>
        );
    }
    return element;
};

const mapStateToProps = (state, ownProps) => (
    {
        questions: state.questions,
        currentIndex: state.currentIndex,
        selectedAnswer: state.selectedAnswer,
        start: state.start,
        finish: state.finish,
        isAnswered: state.isAnswered,
        isCorrect: state.isCorrect,
        score: state.score
    }
);

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        handleStartClick: () => dispatch(startQuiz()),
        handleFinishClick: () => dispatch(endQuiz()),
        handleRestartClick: () => dispatch(restartQuiz()),
        handleNextClick: () => dispatch(nextQuestion()),
        handleAnswerClick: (id) => dispatch(selectAnswer(id))
    }
);

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(QuizContainer));
