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
  background: #805ad5;
  border-radius: 6px;
  width: calc(100px * 4 + 10px * 6);
  height: calc(100px * 4 + 10px * 6);
  opacity: 0.7;
  box-shadow: 5px 5px 5px gray;
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
  background: #faf5ff;
  border-radius: 6px;
  box-shadow: 3px 3px 3px lightgray;
`;

const InnerText = styled.p<{ $color?: number; $size?: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: ${(props) => (props.$size === 4 ? 2.5 : 3)}rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
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
  background: #805ad5;
  border-radius: 6px;
  box-shadow: inset;
  opacity: 0.7;
  box-shadow: 5px 5px 5px gray;
`;

const ScoreBoxInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  color: white;
`;

const ScoreBoxInnerText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

// eslint-disable-next-line consistent-return
const selectColor = (color: number) => {
  switch (color) {
    case 2:
      return '#D8E2DC';
    case 4:
      return '#D8E2DC';
    case 8:
      return '#FFE5D9';
    case 16:
      return '#FFE5D9';
    case 32:
      return '#FFCAD4';
    case 64:
      return '#FFCAD4';
    case 128:
      return '#F4ACB7';
    case 256:
      return '#F4ACB7';
    case 512:
      return '#9D8189';
    case 1024:
      return '#9D8189';
    case 2048:
      return '#ff686b';
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
