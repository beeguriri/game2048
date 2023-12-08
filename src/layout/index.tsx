import {
  LayoutContainer,
  LayoutFooter,
  LayoutHeader,
  LayoutMainContent,
  LayoutSidebar,
} from './style';

const MainContainer = () => {
  return (
    <LayoutContainer>
      <LayoutHeader>header</LayoutHeader>
      <LayoutSidebar>sidebar</LayoutSidebar>
      <LayoutMainContent>main contents</LayoutMainContent>
      <LayoutFooter>footer</LayoutFooter>
    </LayoutContainer>
  );
};

export default MainContainer;
