import { MAX_POS } from '@assets/constant';
import { useToast } from '@chakra-ui/react';
import ToastBox from '@components/Box';
import useConfetti from '@hooks/useConfetti';
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
  // const [board, setBoard] = useState<number[][]>(
  //   initialBoardSetting(
  //     Array.from(new Array(MAX_POS), () => new Array(MAX_POS).fill(0)),
  //   ),
  // );
  //테스트용
  const [board, setBoard] = useState<number[][]>([
    [2, 4, 4, 0],
    [64, 128, 2, 2],
    [1024, 1024, 0, 0],
    [0, 0, 256, 2],
  ]);
  const [isGameOver, setIsGameOver] = useState(false);
  const toast = useToast();
  const id = 'game';
  useMoveTile({ board, setBoard, setIsGameOver, score, setScore });
  useConfetti({ board });

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
                  <InnerText
                    $color={value}
                    $size={Number(value?.toString().length)}
                  >
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
