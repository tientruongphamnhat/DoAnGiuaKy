import { connect } from 'react-redux';
import Login from '../components/Login/index';

import { callAPILogin } from '../actions/user.actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(callAPILogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
