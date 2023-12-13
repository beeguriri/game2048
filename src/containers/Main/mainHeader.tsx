import { ScoreBox, ScoreWrapper } from './style';

const MainHeader = ({ score }: { score: number }) => {
  return (
    <>
      <ScoreWrapper>
        <ScoreBox>{score}</ScoreBox>
        <ScoreBox>400</ScoreBox>
      </ScoreWrapper>
    </>
  );
};

export default MainHeader;
