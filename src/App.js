import React from "react";
import Create from "./pages/Create";
import NavTabs from "./components/NavTabs/index";
// import Trivia from "./pages/Trivia";
import NewGame from "./pages/NewGame";
import Home from "./pages/Home";
import { TotalPoints, PointBoard } from "./pages/Points";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jurassic from "./pages/Jurassic";
import StarWarsBoard from "./pages/StarWars";
import Music from "./pages/Music";
import Soccer from "./pages/Soccer";
import Basketball from "./pages/Basketball";
import Baseball from "./pages/Baseball";
import MathTrivia from "./pages/MathTrivia";
import Science from "./pages/Science";
import SocialStudies from "./pages/SocialStudies";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/newgame" component={NewGame} />
          <Route exact path="/game" component={PointBoard} />
          <Route exact path="/jurassic" component={Jurassic} />
          <Route exact path="/starwars" component={StarWarsBoard} />
          <Route exact path="/80music" component={Music}/>
          <Route exact path="/soccertrivia" component={Soccer} />
          <Route exact path="/basketballtrivia" component={Basketball} />
          <Route exact path="/baseballtrivia" component={Baseball} />
          <Route exact path="/math" component={MathTrivia} />
          <Route exact path="/socialstudies" component={SocialStudies} />
          <Route exact path="/science" component={Science} />
        </div>
      </Router>

    );
  }
  
  export default App;



// import React, { Component } from 'react';
// import update from 'react-addons-update';
// import quizQuestions from './api/quizQuestions';
// import Quiz from './components/Quiz';
// import Result from './components/Results';
// import got from './images/got.jpg';
// // import logo from './svg/logo.svg';
// import './App.css';
 
// class App extends Component {
 
 
 
 
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       counter: 0,
//       questionId: 1,
//       question: '',
//       answerOptions: [],
//       answer: '',
//       answersCount: {
//         Stark: 0,
//         Lannister: 0,
//         Targaryen: 0
//       },
//       result: ''
//     };
 
//     this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//   }
 
//   componentWillMount() {
//     const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
//     this.setState({
//       question: quizQuestions[0].question,
//       answerOptions: shuffledAnswerOptions[0]
//     });
//   }
 
//   shuffleArray(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
 
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
 
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
 
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
 
//     return array;
//   };
 
//   handleAnswerSelected(event) {
//     this.setUserAnswer(event.currentTarget.value);
 
//     if (this.state.questionId < quizQuestions.length) {
//         setTimeout(() => this.setNextQuestion(), 300);
//     } else {
//         setTimeout(() => this.setResults(this.getResults()), 300);
//     }
//   }
 
//   setUserAnswer(answer) {
//     const updatedAnswersCount = update(this.state.answersCount, {
//       [answer]: {$apply: (currentValue) => currentValue + 1}
//     });
 
//     this.setState({
//         answersCount: updatedAnswersCount,
//         answer: answer
//     });
//   }
 
//   setNextQuestion() {
//     const counter = this.state.counter + 1;
//     const questionId = this.state.questionId + 1;
 
//     this.setState({
//         counter: counter,
//         questionId: questionId,
//         question: quizQuestions[counter].question,
//         answerOptions: quizQuestions[counter].answers,
//         answer: ''
//     });
//   }
 
//   getResults() {
//     const answersCount = this.state.answersCount;
//     const answersCountKeys = Object.keys(answersCount);
//     const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
//     const maxAnswerCount = Math.max.apply(null, answersCountValues);
 
//     return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
//   }
 
//   setResults(result) {
//     if (result.length === 1) {
//       this.setState({ result: result[0] });
//     } else {
//       this.setState({ result: 'Undetermined' });
//     }
//   }
 
//   renderQuiz() {
//     return (
//       <Quiz
//         answer={this.state.answer}
//         answerOptions={this.state.answerOptions}
//         questionId={this.state.questionId}
//         question={this.state.question}
//         questionTotal={quizQuestions.length}
//         onAnswerSelected={this.handleAnswerSelected}
//       />
//     );
//   }
 
//   renderResult() {
//     return (
//       <Result quizResult={this.state.result} />
//     );
//   }
 
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" />  */}
//           <img src={got} className="App-img" alt="img" />
          
//         </div>
//         {this.state.result ? this.renderResult() : this.renderQuiz()}
//       </div>
//     );
 
 
 
 
//   }
 
// }
 
// export default App;