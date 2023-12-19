import { Box, Button, Link, Text, Center, Heading } from '@chakra-ui/react';

type Props = {
  head?: string;
  text?: string;
  button?: string;
};

const ToastBox = ({ head, text, button }: Props) => {
  return (
    <>
      <Box w="100%" bg="#805AD5" p={7} color="white" borderRadius="6">
        <Heading fontSize="xx-large" fontWeight="bold" mb={3}>
          {head}
        </Heading>
        <Text mb={4}>{text}</Text>
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
              {button}
            </Button>
          </Link>
        </Center>
      </Box>
    </>
  );
};

export default ToastBox;
