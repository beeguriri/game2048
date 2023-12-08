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

export { StyledMain };
