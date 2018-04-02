import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logoutUser } from "../actions/LoginActions";

class Signout extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(event) {
    event.preventDefault();
    this.props.logoutUser()
  }

  render() {
    var signoutLink = null;
    if (this.props.login.username !== undefined && this.props.login.username != ''){
      signoutLink = <div onClick={ this.handleSignout }>Signout</div>
    }
    return (
      <div>{signoutLink}</div>)
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser: logoutUser }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Signout);