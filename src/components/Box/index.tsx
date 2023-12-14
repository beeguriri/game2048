import { Box, Button, Link, Text, Center, Heading } from '@chakra-ui/react';

const ToastBox = () => {
  return (
    <>
      <Box w="100%" bg="#805AD5" p={7} color="white" borderRadius="6">
        <Heading fontSize="xx-large" fontWeight="bold" mb={3}>
          Game Over
        </Heading>
        <Text mb={4}>더 이상 이동할 수 있는 타일이 없습니다.</Text>
        <Center>
          <Link href="/" textDecoration="none">
            <Button
              bg="#805AD5"
              border="white 1px solid"
              color="white"
              _hover={{
                background: 'white',
                color: '#805AD5',
              }}
            >
              ✨ New Game ✨
            </Button>
          </Link>
        </Center>
      </Box>
    </>
  );
};

export default ToastBox;
