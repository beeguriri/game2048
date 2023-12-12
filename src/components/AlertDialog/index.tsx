import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const GameOverAlert = ({ handleNewGame }: { handleNewGame: () => void }) => {
  const { isOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>게임종료</AlertDialogHeader>
          <AlertDialogBody>
            게임이 종료 되었습니다. 새 게임을 시작하겠습니까?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} colorScheme="red" onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="green" onClick={handleNewGame} ml={3}>
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default GameOverAlert;
