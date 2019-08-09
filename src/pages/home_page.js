import React from "react";
import firebase from "firebase";

import TopicBlock from "../components/topic_block";


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://eleseba.tanksley@gmail.com:35l4eJazz@zonkcluster-nje2i.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



class HomePage extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                listOfQuizzes: [],
                filterText: "",
                matchingTheSearch: false,
                listOfMatchedQuizzes: [],
                currentUser: ""
            };
            this.handleUserInput = this.handleUserInput.bind(this);
            this.findMatches = this.findMatches.bind(this);
            this.populateQuizArray = this.populateQuizArray.bind(this);
        }
        componentDidMount() {
            this.populateQuizArray();
        }

        populateQuizArray() {
            const firebase = firebase.database().ref("quizzes");

            let quizzes = [];
            firebaseRef.on("child_added", (snapshot) => {
                let quiz = {
                    name: snapshot.key,
                    detail: snapshot.val()
                };
                quizzes.push(quiz);
                this.setState({ listOfQuizzes: quizzes });
            });
        }

        handleUserInput(filterText, matchingTheSearch) {
            this.setState({
                filterText: filterText,
                matchingTheSearch: this.state.matchingTheSearch
            });

            const matchArry = this.findMatches(filterText, this.state.listOfQuizzes);
            this.setState({matchingTheSearch: true, listOfMatchedQuizzes: [...matchArry]});

            if (matchArry.length === this.state.listOfQuizzes.length) {
                this.setState({matchingTheSearch: false});
            } else if (matchArry.length >= 1) {
                // 
            } else if (matchArry.length === 0) {
                this.setState({matchingTheSearch: "no match"});
            }
        }

        findMatches(wordToMatch, quizzes){
            return quizzes.filter(quiz => {
                const rgex = new RegExp(wordToMatch, "gi");
                return quiz.name.match(rgex);
            });
        }

        render() {
            return (
                <div>
                    <main>
                        <div className="poster">
                            <h2 className="poster-title">Welcome</h2>
                        </div>

                        <div className="trivia">
                            {this.state.matchingTheSearch == true ?
                            this.state.listOfMatchedQuizzes.map((quiz) => (
                                <TopicBlock key={quiz.name}
                                    quizDetails={quiz}
                                    isUserLoggedIn={ this.props.isUserLoggedIn}
                                    />
                            )) : 
                            this.state.listOfQuizzes.map((quiz) => (
                                <TopicBlock key={quiz.name}
                                    quizDetails={quiz}
                                    isUserLoggedIn={ this.props.isUserLoggedIn}
                                    />
                            ))
                        }
                        </div>
                    </main>
                </div>
            )
        }
    }

export default HomePage;
