import { MAX_POS } from '@assets/constant';
import { useToast } from '@chakra-ui/react';
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

  useMoveTile2({ board, setBoard, setIsGameOver });

  useEffect(() => {
    if (isGameOver) {
      toast({
        title: 'Game Over',
        status: 'error',
        description: '더이상 이동할 수 있는 타일이 없습니다.',
      });
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
