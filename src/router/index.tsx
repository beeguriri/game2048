import MainContainer from '@layout/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROOT } from './path';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<MainContainer />}>
          {/* 
          라우팅이 필요할 때 작성
          <Route></Route>
          <Route></Route>
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
