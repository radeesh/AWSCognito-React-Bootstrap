import React from 'react';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../actions/LoginActions";
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'radeesh',
      password: 'password'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // validateForm() {
    //return this.state.username.length > 0 && this.state.password.length > 0;
  // }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state
    if (username && password) {
      this.props.loginUser(username, password)
    }
  }
  
  render() {
    console.log(this.props.login)
    var errorMessage = null;
    if (this.props.login.message !== undefined && this.props.login.message !== ''){
      errorMessage = <Alert bsStyle="warning">
        { this.props.login.message }
      </Alert>
    }
    return(
    <Grid>
      <Row className="show-grid">
          <Col xs={6} md={4} mdPush={4} xsPush={3}>
              {errorMessage}
              <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="username">
                      <ControlLabel>Username</ControlLabel>
                      <FormControl
                          autoFocus
                          type="username"
                          value= { this.state.username }
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="password">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                          value={ this.state.password }
                          onChange={this.handleChange}
                          type="password"
                      />
                  </FormGroup>
                  <Button bsStyle="primary" bsSize="small"
                      block
                      type="submit"
                      onClick={ this.handleSubmit }
                  >
                      Login
                  </Button>
                  <hr/>
                  Dont't have an account <Link to="/register">Sign Up Here</Link>
              </form>
          </Col>
      </Row>
    </Grid>)
  }
}
// export default Login;
const mapStateToProps = state => {
  return {
    login: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser: loginUser }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);