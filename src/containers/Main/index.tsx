import AboveGame from './aboveGame';
// import Game from './game';
import Game from './game';
import MainHeader from './mainHeader';
import { StyledMain } from './style';

const MainContents = () => {
  return (
    <StyledMain>
      <MainHeader />
      <AboveGame />
      <Game />
    </StyledMain>
  );
};

export default MainContents;
