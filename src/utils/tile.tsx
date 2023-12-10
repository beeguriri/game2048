import { MAX_POS } from "@assets/constant";
import { getRandomInteger } from "./number";

type Item = {
  xPos: number;
  yPos: number;
  value: number;
};

export function getInitialTileList(): Item[] {
  
  const tileList: Item[] = [];

  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);

  return tileList;
}

function checkCollision(tileList: Item[], tile: Item) {
  //하나라도 같은 것이 있으면 true를 반환하는 함수
  return tileList.some( item => item.xPos === tile.xPos && item.yPos === tile.yPos);
}
export function makeTile(tileList: Item[]) {
  let tile;
  while(!tile || checkCollision(tileList, tile)) {
    tile = {
      xPos: getRandomInteger(1, MAX_POS),
      yPos: getRandomInteger(1, MAX_POS),
      value: 2,
    }
  }
  return tile;
}