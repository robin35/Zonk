import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";

// function Login() {
//     return (
//         <div>

//         </div>
//     );
// }

// export default Login;

class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState ({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", pasword: "" });
};

render() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <h3>New User Information</h3>
                </Col>
                <Col size="md-6">

        <form>
            <p>Username: {this.state.username}</p>
            <p>Passowrd: {this.state.password}</p>
            <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            />
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
        </form>

                </Col>
            </Row>
        </Container>
        
    );

}
}

export default Form;

