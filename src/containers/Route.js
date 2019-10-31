import { connect } from 'react-redux';
import PVRoute from '../components/Route';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PVRoute);
