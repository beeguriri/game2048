import { MAX_POS } from '@assets/constant';
import { useToast } from '@chakra-ui/react';
import ToastBox from '@components/Box';
import useMoveTile from '@hooks/useMoveTile';
import { initialBoardSetting } from '@utils/tile';
import { useEffect, useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

const Game = ({
  score,
  setScore,
}: {
  score: number;
  setScore: (score: number) => void;
}) => {
  const [board, setBoard] = useState<number[][]>(
    initialBoardSetting(
      Array.from(new Array(MAX_POS), () => new Array(MAX_POS).fill(0)),
    ),
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const toast = useToast();
  const id = 'test';
  useMoveTile({ board, setBoard, setIsGameOver, score, setScore });

  useEffect(() => {
    if (isGameOver) {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: null,
          position: 'top',
          render: () => (
            <>
              <ToastBox />
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

export default Game;
