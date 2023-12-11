import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import { makeTile, moveTile } from '@utils/tile';
import { useEffect } from 'react';

type Position = {
  x: number;
  y: number;
};

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
  setTileList: any;
};

export default function useMoveTile({ tileList, setTileList }: Props) {
  //움직이면 항상 추가가 되어야 함
  function moveAndAdd({ x, y }: Position) {
    console.log('tileList', tileList);
    const newTileList = moveTile({ tileList, x, y });
    console.log('newTileList', newTileList);

    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    console.log('add newTileList', newTileList);
    setTileList(newTileList);
  }

  function moveUp() {
    moveAndAdd({ x: 0, y: -1 });
  }

  function moveDown() {
    moveAndAdd({ x: 0, y: 1 });
  }

  function moveLeft() {
    moveAndAdd({ x: -1, y: -0 });
  }

  function moveRight() {
    moveAndAdd({ x: 1, y: 0 });
  }

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}
