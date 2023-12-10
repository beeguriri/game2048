import { getInitialTileList } from '@utils/tile';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';
import { useState } from 'react';
import { times } from 'lodash';
import { MAX_POS } from '@assets/constant';
import useMoveTile from '@hooks/useMoveTile';

type Item = {
  xPos: number;
  yPos: number;
  value: number;
  isNew: boolean,
  isMerged: boolean,
  isDisabled: boolean,
};

const Game = () => {
    const [tileList, setTileList] = useState<Item[]>(getInitialTileList);
    useMoveTile({tileList, setTileList});
    return (
      <>
        <GameContainer>
          <GridContainer>
            {/* 카드 기본 틀 만들기 */}
            {times(MAX_POS, (y) =>
              times(MAX_POS, (x) => (
                <GridCell key={`cell-${x+1}-${y+1}`} $xPos={x+1} $yPos={y+1}>
                  <InnerText></InnerText>
                </GridCell>
              ))
            )}

            {/* tile List map으로 돌기 */}
            {tileList.map(item => {
              return (
                <GridCell key={`tile-${item.xPos}-${item.yPos}`} $xPos={item.xPos} $yPos={item.yPos}>
                  <InnerText $color={item.value}>{item.value}</InnerText>
                </GridCell>
              )
            })}
          </GridContainer>
        </GameContainer>
      </>
    )
  };
  
  export default Game;
  