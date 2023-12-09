import styled from '@emotion/styled';

const StyledMain = styled.main`
  width: 100%;
  height: calc(100% - 100px - 35px); //header, footer 영역 제외
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #faf5ff;
`;

const Title = styled.p`
font-weight: bold;
font-size : 1rem;
`;

const GameContainer = styled.div`
  margin-top: 40px;
  position: relative;
  padding: 15px;
  cursor: default;
  -webkit-touch-callout: none;
  -ms-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  background: #bbada0;
  border-radius: 6px;
  width: 500px;
  height: 500px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const GridContainer = styled.div`
  position: absolute;
  z-index: 1;
`

const GridRow = styled.div`
  margin-bottom: 15px;
`

const GridCell = styled.div`
  width: 106.25px;
  height: 106.25px;
  margin-right: 15px;
  float: left;
  border-radius: 3px;
  background: rgba(238, 228, 218, 0.35);
  border: 1px solid red;
`

export { StyledMain, Title, GameContainer, GridContainer, GridRow, GridCell };
