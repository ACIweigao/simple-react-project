import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import './index.scss';

const User = ({ route }) => {
  const history = useHistory();

  const handleAddUser = () => {
    history.push('/users/addUsers');
  };

  return (
    <div className="user-page">
      this is User page
      <Button onClick={handleAddUser} variant="contained" color="primary">
        AddUser
      </Button>
      {renderRoutes(route.routes)}
    </div>
  );
};

User.propTypes = {
  route: PropTypes.object.isRequired,
};

export default User;
