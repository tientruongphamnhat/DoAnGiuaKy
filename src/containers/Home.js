import { connect } from 'react-redux';
import Home from '../components/Home';
import { changeInfo } from '../actions/user.actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  changeInfo: (email, name) => dispatch(changeInfo(email, name))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
