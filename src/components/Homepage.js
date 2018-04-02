import React from 'react';
// import { Link } from 'react-router-dom'
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { loginUser } from "../actions/LoginActions";
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4} mdPush={4} xsPush={3}>
          Welcome to homepage {this.props.login.username}
        </Col>
      </Row>
    </Grid>)
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};
export default connect(mapStateToProps)(Homepage);