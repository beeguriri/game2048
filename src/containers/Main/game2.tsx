import { MAX_POS } from '@assets/constant';
import useMoveTile2 from '@hooks/useMoveTile2';
import { generateNewTile } from '@utils/tile2';
import { times } from 'lodash';
import { useEffect, useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

const Game2 = () => {
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [board, setBoard] = useState<number[][]>(initialBoard);
  //초기에 두개 만들고 시작
  useEffect(() => {
    setBoard(generateNewTile(initialBoard));
    setBoard(generateNewTile(initialBoard));
  }, []);
  console.log(board);
  useMoveTile2({ board, setBoard });
  return (
    <>
      <GameContainer>
        <GridContainer>
          {/* 카드 기본 틀 만들기 */}
          {times(MAX_POS, (y) =>
            times(MAX_POS, (x) => (
              <GridCell
                key={`cell-${y + 1}-${x + 1}`}
                $xPos={y + 1}
                $yPos={x + 1}
              >
                <InnerText>
                  ({y + 1},{x + 1})
                </InnerText>
              </GridCell>
            )),
          )}

          {/* tile List map으로 돌기 */}
          {/* {tileList.map((item) => {
            return (
              <GridCell
                key={`tile-${item.yPos}-${item.xPos}-${item.value}-${item.isMerged}`}
                $xPos={item.yPos}
                $yPos={item.xPos}
              >
                <InnerText $color={item.value}>
                  ({item.yPos},{item.xPos})<br />
                  {item.value}
                </InnerText>
              </GridCell>
            );
          })} */}
        </GridContainer>
      </GameContainer>
    </>
  );
};

export default Game2;
