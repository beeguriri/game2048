import { MAX_POS } from '@assets/constant';
import useMoveTile2 from '@hooks/useMoveTile2';
import { initialBoardSetting } from '@utils/tile2';
import { times } from 'lodash';
import { useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

const Game2 = () => {
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [board, setBoard] = useState<number[][]>(
    initialBoardSetting(initialBoard),
  );

  useMoveTile2({ board, setBoard });
  console.log(board);
  return (
    <>
      <GameContainer>
        <GridContainer>
          {/* tile List map으로 돌기 */}
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
                    {value}
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
