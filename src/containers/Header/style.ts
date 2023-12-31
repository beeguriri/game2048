import styled from '@emotion/styled';

const Header = styled.header`
  background: #805ad5;
  opacity: 0.7;
  position: sticky;
  top: 0;
  z-index: 1;
  width: calc(100px * 4 + 10px * 6 + 4vw);
  height: 100px;
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;

export { Header, Title };
