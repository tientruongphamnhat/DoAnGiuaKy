import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

import { actionslogOut } from '../actions/user.actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionslogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
