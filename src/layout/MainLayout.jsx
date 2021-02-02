import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainAside from './MainAside';
import MainHeader from './MainHeader';
import MainNavigator from './MainNavigator';

import './index.scss';

const MainLayout = ({ route }) => (
  <div>
    <MainHeader />
    <div className="is-vertical">
      <MainAside route={route} />
      <div className="is-horizontal">
        <MainNavigator route={route} />
        {renderRoutes(route.routes)}
      </div>
    </div>
  </div>
);
MainLayout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default withRouter(MainLayout);
