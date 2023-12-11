import { MAX_POS } from '@assets/constant';
import useMoveTile from '@hooks/useMoveTile';
import { getInitialTileList } from '@utils/tile';
import { times } from 'lodash';
import { useState } from 'react';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';

type Item = {
  xPos: number;
  yPos: number;
  value: number;
  isNew: boolean;
  isMerged: boolean;
  isDisabled: boolean;
};

const Game = () => {
  const [tileList, setTileList] = useState<Item[]>(getInitialTileList);
  useMoveTile({ tileList, setTileList });
  return (
    <>
      <GameContainer>
        <GridContainer>
          {/* 카드 기본 틀 만들기 */}
          {times(MAX_POS, (y) =>
            times(MAX_POS, (x) => (
              <GridCell
                key={`cell-${x + 1}-${y + 1}`}
                $xPos={x + 1}
                $yPos={y + 1}
              >
                <InnerText>
                  ({x + 1},{y + 1})
                </InnerText>
              </GridCell>
            )),
          )}

          {/* tile List map으로 돌기 */}
          {tileList.map((item) => {
            return (
              <GridCell
                key={`tile-${item.xPos}-${item.yPos}-${item.value}-${item.isMerged}`}
                $xPos={item.yPos}
                $yPos={item.xPos}
              >
                <InnerText $color={item.value}>
                  ({item.xPos},{item.yPos})<br />
                  {item.value}
                </InnerText>
              </GridCell>
            );
          })}
        </GridContainer>
      </GameContainer>
    </>
  );
};

export default Game;
