import { MAX_POS } from '@assets/constant';
import useMoveTile2 from '@hooks/useMoveTile2';
import { initialBoardSetting } from '@utils/tile2';
import { useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

const Game2 = () => {
  const [board, setBoard] = useState<number[][]>(
    initialBoardSetting(
      Array.from(new Array(MAX_POS), () => new Array(MAX_POS).fill(0)),
    ),
  );
  useMoveTile2({ board, setBoard });

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
