import MainContainer from '@layout/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROOT } from './path';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<MainContainer />}>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
