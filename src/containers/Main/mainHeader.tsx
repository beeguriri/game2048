import { ScoreBox, ScoreBoxInner, ScoreBoxInnerText, ScoreWrapper, Title } from './style';

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
            <ScoreBoxInnerText>
              {score.toLocaleString('ko-kr')}
            </ScoreBoxInnerText>
          </ScoreBoxInner>
        </ScoreBox>
        <ScoreBox>
          <ScoreBoxInner>
            <Title>Best Score</Title>
            <ScoreBoxInnerText>
              {/* 최고기록이 6자리 숫자 안넘는 듯 */}
              {bestScore.toLocaleString('ko-kr')}
            </ScoreBoxInnerText>
          </ScoreBoxInner>
        </ScoreBox>
      </ScoreWrapper>
    </>
  );
};

export default MainHeader;
