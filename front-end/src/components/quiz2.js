import React from "react";
import { Link } from "react-router-dom";
import CountDown from "./countdown/CountDown";

class QuizQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasQuizStarted: false,
            questionsWithShuffledAnswers: [],
    currentQuestion: 0,
    hasUserAnswered: false,
    hasAnsweredCorrectly: false,
    correctAnswer: null, 
        }
    this.suffleAnswers = this.suffleAnswers.bind(this);
    this.startQuiz = this.startQuiz.bing(this);
    this.checkCorrectness = this.checkCorrectness.bind(this);
    }

    componentWillReciveProps(nextProps) {
        if(nextProps.question) {
            this.suffleAnswers(nextProps.question);
        }
    }

    prepareForQuiz() {
        return (
            <div className="prepare-for-quiz">
                <h3>Ready?</h3>
                <button className="btn" onCLick={ () => this.startQuiz() }>Start</button>
            </div>
        )
    }

    displayQuiz() {
        const { questionsWithShuffledAnswers, 
                    currentQuestion,
                    hasUserAnswered,
                    hasAnsweredCorrectly } = this.state;

            if (questionsWithShuffledAnswers.length < 1) {
                return (<div>Quiz is loading...</div>)
            } else if ( questionsWithShuffledAnswers.length < (currentQuestion + 1) ) {
                return (
                    <div className="prepare-for-quiz">
                        <h3>You final score is {this.totalpoints()}</h3>
                        <Link to="/newgame">Return to Quizzes</Link>
                    </div>
                )
            } else {
                return (questionsWithShuffledAnswers.map((question, i) => {
                    return (
                        <div key = {i} className={ (i === currentQuestion) ? "active" : "hide"}>
                            <h3> { question.text } </h3>
                            { question.answer.map( (answer, index) => (
                                <button key={index}
                                    value={answer}
                                    disabled={hasUserAnswered}
                                    className={answer + " btn answer-btn"}
                                    onCLick={ (evt) => this.checkCorrectness (evt.target.value, currentQuestion) } >{answer}</button>

                            ))}

            { hasUserAnswered === true ?
                <div>
                    {hasAnsweredCorrectly === true ?
                        <p>You answered the question correctly, see how many points you can get</p> : 
                        <p>You answered incorrectly.</p>}
                        <p>Your socre is { this.totalpoints() }</p>}
                        <button className="btn" onClick={(evt) => this.advanceQuiz(evt.target.value, currentQuestion)}>Next Question</button>
                        </div>

                         : null }
            </div>
                    )
                }))
            }
    }

    render () {
        const { hasQuizStarted,
                hasUserAnswered,
                currentQuestion,
                questionsWithShuffledAnswers} = this.state;

                return(
                    <main className="quiz-container col-md-6">
                        { hasQuizStarted ? this.displayQuiz() : this.prepareForQuiz() }

                        { hasUserAnswered || !hasQuizStarted ? 
                            (<div className="hide"></div>) :
                            (<CountDown currentQuestion={ currentQuestion }
                                amountofQuestions= {questionsWithShuffledAnswers.length }
                                checkCorrtness= {this.checkCorrectness} />)}
                    </main>
                )
    }
    ShuffleAnswers(questions) {
        const length = questions.length;
        let questionsWithShuffledAnswers = [];

        if (length < 1) {
            return;
        } else {
            for (let i = 0; i < length; i++) {
                let shuffledAnswers = [];
                let currentQuestion = questions[i].text;
                let currentSetOfAnswers = questions[i].answers;

                currentSetOfAnswers.incorrect.map((incorrectAnswer) => shuffledAnswers.push(incorrectAnswer));
                shuffledAnswers.push(currentSetOfAnswers.correct);

                let currentIndex = shuffledAnswers.length;
                let temporaryValue;
                let randomIndex;

                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = shuffledAnswers[currentIndex];
                    shuffledAnswers[currentIndex] = shuffledAnswers[randomIndex];
                    shuffledAnswers[randomIndex] = temporaryValue;
                }

                questionsWithShuffledAnswers.push({
                    text: currentQuestion,
                    answers: shuffledAnswers
                });
            }

            this.setState({
                questionsWithShuffledAnswers: questionsWithShuffledAnswers
            })
        }
    }

    startQuiz() {
        this.setState({
            hasQuizStarted: true
        });
    }

    checkCorrectness(answer, index) {
        const currentQuestion = this.state;
        let correctAnswer = this.props.questions[index].answers.correct;

        this.displayCorrectAnswer(correctAnswer);

        if (answer === correctAnswer) {
            this.setState({
                hasAnsweredCorrectly: true
            });
        } else {
            this.setState({
                hasAnsweredCorrectly: false
            });
        }
    }

    componentDidUpdate() {
        if (this.state.currentQuestion === this.state.questionsWithShuffledAnswers.length && 
                this.state.questionsWithShuffledAnswers.length > 0) {
                    console.log("totalScoreForQuiz", this.state.totalpoints());
                }
    }
    displayCorrectAnswer(correctAnswer){
        this.setState({
            hasUserAnswered: true,
            correctAnswer: correctAnswer
        });
    }

  
    advanceQuiz(index, currentQuestion) {
        this.setState({
            currentQuestion: (currentQuestion + 1),
            hasUserAnswered: false
        })
    }

}

export default QuizQuiz;


