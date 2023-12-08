import styled from '@emotion/styled';

const LayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  border: black solid;
  grid-template-columns: 1.5fr 9fr;
  grid-template-rows: 1.5fr 7fr 1fr;
  grid-template-areas:
    'LayoutHeader LayoutHeader'
    'LayoutSidebar LayoutMainContent'
    'LayoutFooter LayoutFooter';
`;

const LayoutHeader = styled.header`
  grid-area: LayoutHeader;
  width: 100%;
  background-color: salmon;
`;
const LayoutSidebar = styled.div`
  grid-area: LayoutSidebar;
  width: 100%;
  background-color: aliceblue;
`;
const LayoutMainContent = styled.main`
  grid-area: LayoutMainContent;
  width: 100%;
  height: 100%;
  background-color: beige;
`;
const LayoutFooter = styled.footer`
  grid-area: LayoutFooter;
  width: 100%;
  background-color: bisque;
`;

export {
  LayoutContainer,
  LayoutHeader,
  LayoutSidebar,
  LayoutMainContent,
  LayoutFooter,
};
