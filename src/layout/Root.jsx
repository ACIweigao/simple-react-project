import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Root = ({ route }) => <div>{renderRoutes(route.routes)}</div>;

Root.propTypes = {
  route: PropTypes.object.isRequired,
};

export default withRouter(Root);
