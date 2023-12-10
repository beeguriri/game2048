import times from 'lodash/times';
import { MAX_POS } from '@assets/constant';
import { GameContainer, GridCell, GridContainer, GridRow, InnerText } from './style';
import { useState } from 'react';


const Game = () => {
    const [tileList, setTileList] = useState([]);
    return (
      <>
        <GameContainer>
          <GridContainer>
            <GridCell $xPos={1} $yPos={1}>
              <InnerText $color={2}>(1,1)</InnerText>
            </GridCell>
            <GridCell $xPos={1} $yPos={2}>
              <InnerText $color={4}>(1,2)</InnerText>
            </GridCell>
            <GridCell $xPos={1} $yPos={3}>
              <InnerText>(1,3)</InnerText>
            </GridCell>
            <GridCell $xPos={2} $yPos={1}>(2,1)</GridCell>
            <GridCell $xPos={2} $yPos={2}>(2,2)</GridCell>
            <GridCell $xPos={2} $yPos={3}>(2,3)</GridCell>
            <GridCell $xPos={3} $yPos={1}>(3,1)</GridCell>
            <GridCell $xPos={3} $yPos={2}>(3,2)</GridCell>
            <GridCell $xPos={3} $yPos={3}>(3,3)</GridCell>
            {/* {times(MAX_POS, () => (
              <GridRow>
                {times(MAX_POS, () => (
                  <GridCell />
                ))}
              </GridRow>
            ))} */}
          </GridContainer>
          <div className='tile-container'>
            {/* {tileList.map(item => {
              <div className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
                <div className='tile-inner'>{item.value}</div>
              </div>
            })} */}
          </div>
        </GameContainer>
      </>
    )
  };
  
  export default Game;
  