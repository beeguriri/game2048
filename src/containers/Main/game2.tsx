import { MAX_POS } from '@assets/constant';
import { Box, Button, Link, Text, useToast } from '@chakra-ui/react';
import useMoveTile2 from '@hooks/useMoveTile2';
import { initialBoardSetting } from '@utils/tile2';
import { useEffect, useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

const Game2 = () => {
  const [board, setBoard] = useState<number[][]>(
    initialBoardSetting(
      Array.from(new Array(MAX_POS), () => new Array(MAX_POS).fill(0)),
    ),
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const toast = useToast();
  const id = 'test';
  useMoveTile2({ board, setBoard, setIsGameOver });

  useEffect(() => {
    if (isGameOver) {
      console.log('실패확인');
      if (!toast.isActive(id)) {
        toast({
          id,
          status: 'error',
          duration: null,
          position: 'top',
          render: () => (
            <>
              <Box bg="tomato" w="100%" p={4} color="white">
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Game Over
                </Text>
                <Text mb={4}>더 이상 이동할 수 있는 타일이 없습니다.</Text>
                <Link href="/">
                  <Button colorScheme="red">New Game</Button>
                </Link>
              </Box>
            </>
          ),
        });
      }
    }
    return () => {
      setIsGameOver(false);
    };
  }, [isGameOver, toast]);

  return (
    <>
      <GameContainer>
        <GridContainer>
          {/* board map으로 돌기 */}
          {board.map((row, rowIndex) =>
            row.map((value, colIndex) => {
              return (
                <GridCell
                  key={`tile-${rowIndex}-${colIndex}-${value}`}
                  $xPos={rowIndex + 1}
                  $yPos={colIndex + 1}
                >
                  <InnerText $color={value}>
                    ({rowIndex + 1},{colIndex + 1})<br />
                    {value !== 0 ? value : undefined}
                  </InnerText>
                </GridCell>
              );
            }),
          )}
        </GridContainer>
      </GameContainer>
    </>
  );
};

export default Game2;
