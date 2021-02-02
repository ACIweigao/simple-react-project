import { matchRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import { collapseAtom } from '../stores/layoutStore';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

    '& .MuiDrawer-paper': {
      marginTop: '64px',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  isActive: {
    color: 'red',
  },
}));

const menuMap = [
  {
    title: 'dashboard',
    path: '/dashboard',
  },
  {
    title: 'users',
    path: '/users',
  },
];

const MainAside = ({ route }) => {
  const classes = useStyles();
  const history = useHistory();

  const collapse = useRecoilValue(collapseAtom);

  const handleClick = item => () => {
    history.push(item.path);
  };

  const matchRoute = matchRoutes(route.routes, history.location.pathname);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: collapse,
        [classes.drawerClose]: !collapse,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: collapse,
          [classes.drawerClose]: !collapse,
        }),
      }}
    >
      <List>
        {menuMap.map((text, index) => (
          <ListItem
            button
            key={text.title}
            onClick={handleClick(text)}
            className={clsx({
              [classes.isActive]: text.path === matchRoute[0].match.path,
            })}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

MainAside.propTypes = {
  route: PropTypes.object.isRequired,
};

export default MainAside;
