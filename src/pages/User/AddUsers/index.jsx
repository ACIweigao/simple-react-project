import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './index.scss';

const useStyles = makeStyles({
  exitButton: {
    height: ' 36px',
  },
});

const AddUser = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleExitAddUser = () => {
    history.push('/users');
  };

  return (
    <div className="add-user-page">
      this is AddUser page
      <Button
        onClick={handleExitAddUser}
        variant="contained"
        className={classes.exitButton}
      >
        exit
      </Button>
    </div>
  );
};

export default AddUser;
