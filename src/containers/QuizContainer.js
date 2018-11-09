import React from 'react';
import { hot } from 'react-hot-loader';
import AnswerOption from '../components/AnswerOptions';
import Message from '../components/Message';
import Popup from '../components/Popup';
import Question from '../components/Question';
import QuizInfo from '../components/QuizInfo';
import '../ReactQuiz.css';

// main component containing the entire quiz
class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleFinishClick = this.handleFinishClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.state = { // default values
            start: false,
            finish: false,
            count: 0,
            isAnswered: false,
            isCorrect: false,
            score: 0,
        };
    }

    // function to handle the click action of the start button
    handleStartClick(event) {
        this.setState({
            start: true,
        });
    }

    // function to handle the click action of the next button
    handleNextClick(event) {
        const { isAnswered, count } = this.state;

        // defensive check to see if user already selected an answer
        if (!isAnswered) {
            return;
        }

        // update state
        this.setState({
            count: count + 1, // increment to next question
            isAnswered: false, // reset
            isCorrect: false, // reset
        });
    }

    // function to handle the click action of the finish button
    handleFinishClick(event) {
        this.setState({
            finish: true,
        });
    }

    // function to handle the click action of the restart button
    handleRestartClick(event) {
        this.setState({ // reset values
            start: false,
            finish: false,
            count: 0,
            isAnswered: false,
            isCorrect: false,
            score: 0,
        });
    }

    // function to handle the click action of an answer option
    handleAnswerClick(event) {
        const { isAnswered, count, score } = this.state;
        const { data } = this.props;

        // defensive check to see if user already selected an answer
        if (isAnswered) {
            return;
        }

        // defensive check to see if there is a defined value from the selected answer
        const targetValue = event.currentTarget.dataset.value;
        if (targetValue === undefined || targetValue === '') {
            return;
        }

        // setup variables
        const selectedAnswer = parseInt(targetValue, 10);
        const currentQuestion = data.questions[count];
        const correctAnswer = currentQuestion.answerIndex;
        const correct = (correctAnswer === selectedAnswer);
        const updateScore = (correct) ? score + 1 : score;

        // set state
        this.setState({
            isAnswered: true,
            isCorrect: correct,
            score: updateScore,
        });
    }

    render() {
        let element = null;
        const { data } = this.props;
        const { score, start, finish } = this.state;
        const total = data.questions.length;

        // check which display to render
        if (!start) { // check for beginning start popup
            element = (
                <Popup
                    title="Welcome!"
                    text="This is a simple quiz application built using React.js"
                    buttonText="Start quiz"
                    handleButtonClick={this.handleStartClick}
                />
            );
        } else if (finish) { // check for finish/end of quiz
            const text = `Your final score for this quiz is: ${score}/${total}`;
            element = (
                <Popup
                    title="Congratulations!"
                    text={text}
                    buttonText="Restart Quiz"
                    handleButtonClick={this.handleRestartClick}
                />
            );
        } else { // display question and answers
            const { count, isAnswered, isCorrect } = this.state;
            const currentQuestion = data.questions[count];
            const { question } = currentQuestion;

            // setup the questions's answer options
            const answerOptions = currentQuestion.answerOptions.map((answer, index) => (
                <AnswerOption
                    key={Math.random()}
                    index={index}
                    text={answer}
                    handleAnswerClick={this.handleAnswerClick}
                />));

            // check which button (next/finish) to display
            const buttonText = ((count + 1) === total) ? 'Finish Quiz' : 'Next Question';
            const buttonClick = ((count + 1) === total) ? this.handleFinishClick : this.handleNextClick;

            // setup element
            element = (
                <div id="quiz">
                    <QuizInfo
                        count={count}
                        total={total}
                        score={score}
                    />
                    <Question
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
                        style={isAnswered ? { display: 'block' } : { display: 'none' }}
                    >
                        {buttonText}
                    </button>
                </div>
            );
        }

        return element;
    }
}

export default hot(module)(QuizContainer);
