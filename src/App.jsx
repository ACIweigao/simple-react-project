import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import routes from './routes';

const App = () => (
  <RecoilRoot>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </RecoilRoot>
);

export default App;
