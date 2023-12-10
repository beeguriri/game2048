import { addKeyObserver, removeKeyObserver } from "@utils/keyboard";
import { makeTile, moveTile } from "@utils/tile";
import { useEffect } from "react";

type Position = {
  x: number;
  y: number;
}

type Item = {
  xPos: number;
  yPos: number;
  value: number;
  isNew: boolean,
  isMerged: boolean,
  isDisabled: boolean,
}

type Props = {
  tileList: Item[];
  setTileList: any;
}

export default function useMoveTile({ tileList, setTileList }: Props) {

  //움직이면 항상 추가가 되어야 함
  function moveAndAdd({x, y}: Position){
    const newTileList = moveTile({tileList, x, y});
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  };


  function moveUp(){
    console.log('up');
    moveAndAdd({x: -1, y: 0});
  };

  function moveDown(){
    console.log('down');
    moveAndAdd({x: 1, y: 0});
  };

  function moveLeft(){
    console.log('left');
    moveAndAdd({x: 0, y: -1});
  };

  function moveRight(){
    console.log('right');
    moveAndAdd({x: 0, y: 1});
  };

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
    }
  });
}