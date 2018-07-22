/**
 * React Quiz v1.0.0
 * This is simple quiz application built using React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// main component containing the entire quiz
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleFinishClick = this.handleFinishClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.state = { // default values
            'start': false,
            'finish': false,
            'count': 0,
            'isAnswered': false,
            'isCorrect': false,
            'score': 0
        }
    }

    // function to handle the click action of the start button
    handleStartClick(event) {
        this.setState({
            'start': true
        });
    }

    // function to handle the click action of the next button
    handleNextClick(event) {
        // defensive check to see if user already selected an answer
        if (!this.state.isAnswered) {
            return;
        }

        // update state
        let count = this.state.count + 1; // increment to next question
        this.setState({
            'count': count,
            'isAnswered': false, // reset
            'isCorrect': false, // reset
        });
    }

    // function to handle the click action of the finish button
    handleFinishClick(event) {
        this.setState({
            'finish': true
        });
    }

    // function to handle the click action of the restart button
    handleRestartClick(event) {
        this.setState({ // reset values
            'start': false,
            'finish': false,
            'count': 0,
            'isAnswered': false,
            'isCorrect': false,
            'score': 0
        });
    }

    // function to handle the click action of an answer option
    handleAnswerClick(event) {
        // defensive check to see if user already selected an answer
        if (this.state.isAnswered) {
            return;
        }

        // defensive check to see if there is a defined value from the selected answer
        let targetValue = event.currentTarget.dataset.value;
        if (targetValue == undefined || targetValue == '') {
            return;
        }

        // setup variables
        let selectedAnswer = parseInt(targetValue);
        let currentQuestion = this.props.data.questions[this.state.count];
        let correctAnswer = currentQuestion.answerIndex;
        let correct = (correctAnswer == selectedAnswer) ? true : false;
        let score = (correct) ? this.state.score + 1 : this.state.score;

        // set state
        this.setState({
            'isAnswered': true,
            'isCorrect': correct,
            'score': score
        });

    }

    render() {
        let element = null;
        let total = this.props.data.questions.length;
        let score = this.state.score;

        // check which display to render
        if (!this.state.start) { // check for beginning start popup
            element = (
                <Popup
                    title="Welcome!"
                    text="This is a simple quiz application built using React.js"
                    buttonText="Start quiz"
                    handleButtonClick={this.handleStartClick}
                />
            );
        } else if (this.state.finish) { // check for finish/end of quiz
            let text = "Your final score for this quiz is: " + score + '/' + total;
            element = (
                <Popup
                    title="Congratulations!"
                    text={text}
                    buttonText="Restart Quiz"
                    handleButtonClick={this.handleRestartClick}
                />
            );
        } else { // display question and answers
            let count = this.state.count;
            let isAnswered = this.state.isAnswered;
            let isCorrect = this.state.isCorrect;
            let currentQuestion = this.props.data.questions[count];
            let question = currentQuestion.question;

            // setup the questions's answer options
            let answerOptions = currentQuestion.answerOptions.map((answer, index) => {
                return (
                    <AnswerOption
                        key={index}
                        index={index}
                        text={answer}
                        handleAnswerClick={this.handleAnswerClick}
                    />
                );
            });

            // check which button (next/finish) to display
            let buttonText = ((count + 1) == total) ? 'Finish Quiz' : 'Next Question';
            let buttonClick = ((count + 1) == total) ? this.handleFinishClick : this.handleNextClick;

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

// popup component
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // function to handle click action of the button
    handleButtonClick(event) {
        this.props.handleButtonClick(event);
    }

    render() {
        return (
            <div className="popup">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button className="button" onClick={this.handleButtonClick}>{this.props.buttonText}</button>
            </div>
        );
    }
}

// answer option component
class AnswerOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
    }

    // function to handle click action of an answer option
    handleAnswerClick(event) {
        this.props.handleAnswerClick(event);
    }

    render() {
        return (
            <li className="answer" onClick={this.handleAnswerClick} data-value={this.props.index}>
                <span>{this.props.index + 1}.</span>
                <p>{this.props.text}</p>
            </li>
        );
    }
}

// quiz info component
function QuizInfo(props) {
    return (
        <div id="quizInfo">
            <div id="questionCount">Question: <span>{props.count + 1}</span>/<span>{props.total}</span></div>
            <div id="score">Score: {props.score}</div>
        </div>
    );
}

// question component
function Question(props) {
    return <p id="question">{props.question}</p>;
}

// message component
function Message(props) {
    return (
        <div
            id="message"
            style={props.isAnswered ? { display: 'block' } : { display: 'none' }}
            className={props.isCorrect ? 'correct' : 'wrong'}
        >
            {props.isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
        </div>
    );
}

// function to load JSON file
function loadJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(xhr.responseText);
        } else {
            let msg = 'Error: Cannot load JSON File! An error occurred during your request: ' + xhr.status + ' ' + xhr.statusText;
            document.getElementById('root').textContent = msg;
        }
    };
    xhr.send(null);
}

// function to initialize and render the page
function init() {
    // set path to JSON file
    let url = './data/data.json';

    // get JSON data
    loadJSON(url, (response) => {
        // parse JSON string into object
        let data = JSON.parse(response);

        // render page
        ReactDOM.render(
            <Quiz data={data} />,
            document.getElementById('root')
        );
    });
}

// initialize
init();