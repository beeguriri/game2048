import styled from '@emotion/styled';

const StyledMain = styled.div`
  width: calc(100px * 4 + 10px * 6 + 4vw);
  height: calc(100% - 100px - 35px); //header, footer 영역 제외
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #faf5ff;
  justify-content: top;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const Title = styled.span`
  font-size: 1rem;
`;

const StrongTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const GameContainer = styled.div`
  padding: 15px;
  background: #bbada0;
  border-radius: 6px;
  width: calc(100px * 4 + 10px * 6);
  height: calc(100px * 4 + 10px * 6);
`;

const GridContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  gap: 10px;
`;

const GridCell = styled.div<{ $xPos?: number; $yPos?: number }>`
  width: 100px;
  height: 100px;
  grid-row-start: ${(props) => (props.$xPos ? props.$xPos : undefined)};
  grid-column-start: ${(props) => (props.$yPos ? props.$yPos : undefined)};
  border-radius: 3px;
  background: rgba(238, 228, 218, 0.35);
  border: 1px solid red;
`;

const InnerText = styled.p<{ $color?: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 2.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$color ? selectColor(props.$color) : undefined};
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  padding: 5px 15px;
  gap: 2rem;
`;

const ScoreBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #bbada0;
  border-radius: 6px;
`;

const ScoreBoxInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
`;

const ScoreBoxInnerText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line consistent-return
const selectColor = (color: number) => {
  switch (color) {
    case 2:
      return '#FAF5FF';
    case 4:
      return '#FAF5FF';
    case 8:
      return '#E9D8FD';
    case 16:
      return '#D6BCFA';
    case 32:
      return '#B794F4';
    case 64:
      return '#9F7AEA';
    case 128:
      return '#805AD5';
    case 256:
      return '#6B46C1';
    case 512:
      return '#553C9A';
    case 1024:
      return '#44337A';
    case 2048:
      return '#322659';
  }
};

export {
  StyledMain,
  TextWrapper,
  Title,
  StrongTitle,
  GameContainer,
  GridContainer,
  GridCell,
  InnerText,
  ScoreWrapper,
  ScoreBox,
  ScoreBoxInner,
  ScoreBoxInnerText,
};
