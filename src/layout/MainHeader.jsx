import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';

import { PRODUCTION_TITLE } from '../constants/index';
import { collapseAtom } from '../stores/layoutStore';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const [collapse, setCollapse] = useRecoilState(collapseAtom);

  const handleSetCollapse = () => {
    setCollapse(!collapse);
  };

  const handleLoginOut = () => {
    Cookies.remove('token');
    history.push('/');
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleSetCollapse}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {PRODUCTION_TITLE}
        </Typography>
        <Button color="inherit" onClick={handleLoginOut}>
          LoginOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
