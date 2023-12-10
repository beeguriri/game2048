import times from 'lodash/times';
import { MAX_POS } from '@assets/constant';
import { GameContainer, GridCell, GridContainer, GridRow, InnerText } from './style';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

type Item = {
  xPos: number;
  yPos: number;
  value: number;
};

const Game = () => {
    const [tileList, setTileList] = useState<Item[]>([]);
    tileList.push({xPos: 1, yPos: 1, value: 4})
    tileList.push({xPos: 2, yPos: 3, value: 256})

    return (
      <>
        <GameContainer>
          <GridContainer>
            {/* 카드 기본 틀 만들기 */}
            <GridCell $xPos={1} $yPos={1}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={1} $yPos={2}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={1} $yPos={3}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={2} $yPos={1}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={2} $yPos={2}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={2} $yPos={3}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={3} $yPos={1}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={3} $yPos={2}>
              <InnerText></InnerText>
            </GridCell>
            <GridCell $xPos={3} $yPos={3}>
              <InnerText></InnerText>
            </GridCell>

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
  