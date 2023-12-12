import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import { moveLeft } from '@utils/tile2';
import { useEffect } from 'react';

export default function useMoveTile2({
  board,
  setBoard,
}: {
  board: number[][];
  setBoard: any;
}) {
  //움직이면 항상 추가가 되어야 함
  // function moveAndAdd({ x, y }: { x: number; y: number }) {
  //   console.log('board', board);
  //   setBoard(moveLeft(board));
  // }

  function moveUp() {
    // moveAndAdd({ x: 0, y: -1 });
  }

  function moveDown() {
    // moveAndAdd({ x: 0, y: 1 });
  }

  function moveKeyLeft() {
    // moveAndAdd({ x: -1, y: -0 });
    console.log('input key: left');
    const newBoard = moveLeft(board);
    setBoard(newBoard);
  }

  function moveRight() {
    // moveAndAdd({ x: 1, y: 0 });
  }

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveKeyLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveKeyLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}
