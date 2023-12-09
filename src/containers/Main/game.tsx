import times from 'lodash/times';
import { MAX_POS } from '@assets/constant';
import { GameContainer, GridCell, GridContainer, GridRow } from './style';
import { useState } from 'react';


const Game = () => {
    const [tileList, setTileList] = useState([]);
    return (
      <>
        <GameContainer>
          <GridContainer>
            {times(MAX_POS, () => (
              <GridRow>
                {times(MAX_POS, () => (
                  <GridCell />
                ))}
              </GridRow>
            ))}
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
  