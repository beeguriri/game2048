import styled from '@emotion/styled';

const LayoutContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f1f2f7;
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  height: calc(100% - 50px - 35px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export { LayoutContainer, MainWrapper, Main };
