import React from "react";

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.decrementTimer = this.decrementTimer.bind(this);

    }
    decrementTimer() {
        const { timerPerQuestion, currentQuestion, updateTimer, remainingTime, checkCorrectness } = this.props;

        if (remainingTime > 0) {
            let result = remainingTime - 1;
            updateTimer(result);
            checkCorrectness("", currentQuestion);
        } else {
            return;
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.decrementTimer, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
        const { remainingTime, currentQuestion, amountOfQuestions } = this.props;

        return (
            <div className={currentQuestion >= amountOfQuestions ? "hide" : "react-count-down"}>
                <p type="text" className="countdownNum">
                    {
                        remainingTime > 1 ? 
                        "TIme left to answer: " + remainingTime + " seconds" :
                        remainingTime === 1 ?
                        "Time left to answer: " + remainingTime + " seconds" :
                        "time is out!"
                    }
                </p>
            </div>
        )
    }
}