import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {

    return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4} mdPush={4} xsPush={3}>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="firstname">
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                autoFocus
                type="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="lastname">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                value={this.state.lastname}
                onChange={this.handleChange}
                type="lastname"
              />
            </FormGroup>
            <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="lastname"
                />
            </FormGroup>
            <Button bsStyle="primary" bsSize="small"
              type="submit"
              onClick={this.handleSubmit}
            >
              Register
            </Button>{" "}
            <Link to="/login">Cancel</Link>
          </form>
        </Col>
      </Row>
    </Grid>)
  }
}
export default Register;