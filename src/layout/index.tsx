import FooterContainer from '@containers/Footer';
import HeaderContainer from '@containers/Header';
import MainContents from '@containers/Main';
import { LayoutContainer, MainWrapper } from './style';

const MainContainer = () => {
  return (
    <LayoutContainer>
      <MainWrapper>
        <HeaderContainer />
        <MainContents />
        <FooterContainer />
      </MainWrapper>
    </LayoutContainer>
  );
};

export default MainContainer;
