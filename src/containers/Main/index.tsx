import { useEffect, useState } from 'react';
import AboveGame from './aboveGame';
import Game from './game';
import MainHeader from './mainHeader';
import { StyledMain } from './style';

const MainContents = () => {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(
    Number(window.localStorage.getItem('bestScore')),
  );

  useEffect(() => {
    if (!window.localStorage.getItem('bestScore'))
      window.localStorage.setItem('bestScore', '0');
  }, []);

  useEffect(() => {
    if (score > bestScore) setBestScore(score);
    if (window.localStorage.getItem('bestScore') !== String(bestScore))
      window.localStorage.setItem('bestScore', String(bestScore));
  }, [score, bestScore]);

  return (
    <StyledMain>
      <MainHeader score={score} bestScore={bestScore} />
      <AboveGame />
      <Game score={score} setScore={setScore} />
    </StyledMain>
  );
};

export default MainContents;
