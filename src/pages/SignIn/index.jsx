import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie';

const SignIn = () => {
  const history = useHistory();

  const handleLogin = () => {
    Cookies.set('token', true);
    history.push('/');
    window.location.reload();
  };

  const handleSignUp = () => {
    history.push('/sign-up');
  };

  return (
    <>
      this is SignIn page
      <Button variant="outlined" onClick={handleLogin}>
        login
      </Button>
      <Button variant="outlined" color="primary" onClick={handleSignUp}>
        to sign-up
      </Button>
    </>
  );
};

export default SignIn;
