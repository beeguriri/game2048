import { Text } from '@chakra-ui/react';
import { Header } from './style';

const HeaderContainer = () => {
  return (
    <Header>
      <Text fontSize="x-large" fontWeight="bold">
        Let's play 2048 🎲
      </Text>
    </Header>
  );
};

export default HeaderContainer;
