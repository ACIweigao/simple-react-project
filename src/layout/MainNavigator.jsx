import { matchRoutes } from 'react-router-config';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainNavigator = ({ route }) => {
  const history = useHistory();
  const matchRoute = matchRoutes(route.routes, history.location.pathname);

  return (
    <div className="main-navigator">
      <NavLink to={matchRoute[0].route.path}>
        {matchRoute[0].route.name}
      </NavLink>
    </div>
  );
};

MainNavigator.propTypes = {
  route: PropTypes.object.isRequired,
};

export default MainNavigator;
