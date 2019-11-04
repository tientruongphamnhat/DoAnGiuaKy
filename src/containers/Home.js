import { connect } from 'react-redux';
import Home from '../components/Home';
import { changeName, changePassword } from '../actions/user.actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  changeName: (email, name) => dispatch(changeName(email, name)),
  changePassword: (email, password) => dispatch(changePassword(email, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
