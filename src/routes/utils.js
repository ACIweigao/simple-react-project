import { Redirect } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const redirect = path => () => <Redirect to={path} />;
