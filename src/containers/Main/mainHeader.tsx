import Counter from '@components/Counter';
import { ScoreBox, ScoreBoxInner, ScoreWrapper, Title } from './style';


const MainHeader = ({
  score,
  bestScore,
}: {
  score: number;
  bestScore: number;
}) => {
  return (
    <>
      <ScoreWrapper>
        <ScoreBox>
          <ScoreBoxInner>
            <Title>score</Title>
            <Counter number={score} duration={500}></Counter>
          </ScoreBoxInner>
        </ScoreBox>
        <ScoreBox>
          <ScoreBoxInner>
            <Title>Best Score</Title>
            <Counter number={bestScore} duration={500}></Counter>
          </ScoreBoxInner>
        </ScoreBox>
      </ScoreWrapper>
    </>
  );
};

export default MainHeader;
