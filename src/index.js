import ReactDOM from 'react-dom';
import React from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import {Bootstrap, Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert, PageHeader} from 'react-bootstrap';
import Login from './Login.jsx';
var PoolURL="https://thisisnotarealpoolurl.execute-api.us-west-2.amazonaws.com/realurl"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "username",
            password: "password",
            cognitoresponse: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        var poolData = {
            UserPoolId : 'us-west-2_UsErPoOlId', // Your user pool id here
            ClientId : 'realclientidshouldgohereok' // Your client id here
        };

        var authenticationData = {
            Username : this.state.username,
            Password: this.state.password
        };

        var authenticationDetails = new AuthenticationDetails(authenticationData);

        var userPool = new CognitoUserPool(poolData);


        var userData = {
            Username : this.state.username,
            Pool : userPool
        };

        var cognitoUser = new CognitoUser(userData);
        console.log("Submitting Login");
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log(result);
                fetch(PoolURL, {
                    method: 'get',
                    headers: {
                        'Authorization': result.idToken.jwtToken
                    },
                })
                .then((response) => response.json()) // Transform the data into json
                .then(data => this.setState({cognitoresponse:data.message}))
                .catch(error => console.log('parsing failed', error));
            },

            onFailure: err => {
                this.setState({cognitoresponse:err.message})
            },

            newPasswordRequired: function(userAttributes, requiredAttributes) {
                var newPassword="NeWpAsSwOrD";
                delete userAttributes.email_verified;
                cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
            }
        });
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    componentWillMount() {

    }

    render() {
        var message = null;
        if (this.state.cognitoresponse){
            message =
                <Alert bsStyle="warning">
                    {this.state.cognitoresponse}
                </Alert>;
        }

        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={8} mdPush={2}>
                            Reporting Admin Console

                            {message}
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="username">
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        type="password"
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
                <Login/>
            </div>
        )
    }

}

var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
