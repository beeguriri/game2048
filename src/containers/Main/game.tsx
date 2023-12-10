import { getInitialTileList } from '@utils/tile';
import { GameContainer, GridCell, GridContainer, InnerText } from './style';
import { useState } from 'react';
import { times } from 'lodash';
import { MAX_POS } from '@assets/constant';

type Item = {
  xPos: number;
  yPos: number;
  value: number;
};

const Game = () => {
    const [tileList, setTileList] = useState<Item[]>(getInitialTileList);
    

    return (
      <>
        <GameContainer>
          <GridContainer>
            {/* 카드 기본 틀 만들기 */}
            {times(MAX_POS, (y) =>
              times(MAX_POS, (x) => (
                <GridCell $xPos={x+1} $yPos={y+1}>
                  <InnerText></InnerText>
                </GridCell>
              ))
            )}

            {/* tile List map으로 돌기 */}
            {tileList.map(item => {
              return (
                <GridCell $xPos={item.xPos} $yPos={item.yPos}>
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
  