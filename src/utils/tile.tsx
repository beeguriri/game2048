import { MAX_POS } from '@assets/constant';
import { getRandomInteger } from './number';

type Item = {
  xPos: number;
  yPos: number;
  value: number;
  isNew: boolean;
  isMerged: boolean;
  isDisabled: boolean;
};

type Props = {
  tileList: Item[];
  x: number;
  y: number;
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
  return tileList.some(
    (item) => item.xPos === tile.xPos && item.yPos === tile.yPos,
  );
}

export function makeTile(tileList: Item[]) {
  let tile;
  while (!tile || checkCollision(tileList, tile)) {
    tile = {
      xPos: getRandomInteger(1, MAX_POS),
      yPos: getRandomInteger(1, MAX_POS),
      value: 2,
      isNew: true,
      isMerged: false,
      isDisabled: false,
    };
  }
  return tile;
}

export function moveTile({ tileList, x, y }: Props) {
  const isMoveY = y !== 0;
  const isMinus = x + y < 0;
  const sorted = tileList
    .map((item) => ({ ...item, isNew: false, isMerged: false }))
    .filter((item) => !item.isDisabled)
    .sort((a, b) => {
      const res = isMoveY ? a.xPos - b.xPos : a.yPos - b.yPos;
      if (res) return res;
      else {
        if (isMoveY) return Math.abs(a.yPos - b.yPos);
        else return Math.abs(a.xPos - b.xPos);
      }
    });
  const initialPos = isMinus ? 1 : MAX_POS;
  let pos = initialPos;
  for (let i = 0; i < sorted.length; i++) {
    if (isMoveY) {
      sorted[i].yPos = pos;
      pos = isMinus ? pos + 1 : pos - 1;
      if (sorted[i].xPos !== sorted[i + 1]?.xPos) {
        pos = initialPos;
      }
    } else {
      sorted[i].xPos = pos;
      pos = isMinus ? pos + 1 : pos - 1;
      if (sorted[i].yPos !== sorted[i + 1]?.yPos) {
        pos = initialPos;
      }
    }
  }

  let nextPos = 0;
  const newTileList = [...sorted];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].isDisabled) continue;

    if (
      nextPos && isMoveY
        ? sorted[i].xPos === sorted[i - 1]?.xPos
        : sorted[i].yPos === sorted[i - 1]?.yPos
    ) {
      if (isMoveY) sorted[i].yPos = nextPos;
      else sorted[i].xPos = nextPos;

      nextPos += isMinus ? 1 : -1;
    } else nextPos = 0;

    if (
      (isMoveY
        ? sorted[i].xPos === sorted[i + 1]?.xPos
        : sorted[i].yPos === sorted[i + 1]?.yPos) &&
      sorted[i].value === sorted[i + 1]?.value
    ) {
      const tile = makeTile(sorted);
      tile.xPos = sorted[i].xPos;
      tile.yPos = sorted[i].yPos;
      tile.isMerged = true;
      tile.value = sorted[i].value * 2;
      newTileList.push(tile);
      sorted[i].isDisabled = true;
      sorted[i + 1].isDisabled = true;

      if (isMoveY) {
        nextPos = sorted[i + 1].yPos;
        sorted[i + 1].yPos = sorted[i].yPos;
      } else {
        nextPos = sorted[i + 1].xPos;
        sorted[i + 1].xPos = sorted[i].xPos;
      }
    }
  }

  return newTileList.filter((item) => !item.isDisabled);
}
