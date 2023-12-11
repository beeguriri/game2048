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
  const isMoveY = y !== 0; // y 축으로의 움직임 여부
  const isMinus = x + y < 0; // 감소 방향으로 움직이는지 여부

  // 움직임 방향 및 축에 따라 타일을 정렬
  const sorted = tileList
    .map((item) => ({ ...item, isMerged: false, isNew: false }))
    .filter((item) => !item.isDisabled)
    .sort((a, b) => {
      const res = isMoveY
        ? a[isMinus ? 'xPos' : 'yPos'] - b[isMinus ? 'xPos' : 'yPos']
        : a[isMinus ? 'yPos' : 'xPos'] - b[isMinus ? 'yPos' : 'xPos'];

      return res || (isMinus ? a.yPos - b.yPos : b.yPos - a.yPos);
    });

  console.log('sorted', sorted);

  let pos = isMinus ? 1 : MAX_POS; // 초기 위치 설정
  let nextPos = 0;
  const newTileList: Item[] = [];

  // 움직임 방향 및 축에 따라 타일의 위치 업데이트
  for (let i = 0; i < sorted.length; i++) {
    const currentItem = sorted[i];

    if (isMoveY) {
      currentItem.yPos = pos;
    } else {
      currentItem.xPos = pos;
    }

    pos = isMinus ? pos + 1 : pos - 1;

    // 다른 열 또는 행에 속한 경우 위치 초기화
    if (
      currentItem[isMoveY ? 'xPos' : 'yPos'] !==
      sorted[i + 1]?.[isMoveY ? 'xPos' : 'yPos']
    ) {
      pos = isMinus ? 1 : MAX_POS;
    }

    // 같은 열 또는 행에 속한 타일의 경우 위치 업데이트
    if (
      nextPos &&
      currentItem[isMoveY ? 'xPos' : 'yPos'] ===
        sorted[i - 1]?.[isMoveY ? 'xPos' : 'yPos']
    ) {
      currentItem[isMoveY ? 'yPos' : 'xPos'] = nextPos;
      nextPos += isMinus ? 1 : -1;
    } else {
      nextPos = 0;
    }

    newTileList.push(currentItem);
  }

  return newTileList;
}
