import { useState } from 'react';
import AboveGame from './aboveGame';
// import Game from './game';
import Game from './game';
import MainHeader from './mainHeader';
import { StyledMain } from './style';

const MainContents = () => {
  const [score, setScore] = useState<number>(0);
  return (
    <StyledMain>
      <MainHeader score={score} />
      <AboveGame />
      <Game score={score} setScore={setScore} />
    </StyledMain>
  );
};

export default MainContents;
