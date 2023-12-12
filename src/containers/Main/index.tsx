import AboveGame from './aboveGame';
// import Game from './game';
import Game2 from './game2';
import MainHeader from './mainHeader';
import { StyledMain } from './style';

const MainContents = () => {
  return (
    <StyledMain>
      <MainHeader />
      <AboveGame />
      <Game2 />
    </StyledMain>
  );
};

export default MainContents;
