import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import { isSameBoard, moveLeft, moveRight } from '@utils/tile2';
import { useEffect } from 'react';

export default function useMoveTile2({
  board,
  setBoard,
}: {
  board: number[][];
  setBoard: (board: number[][]) => void;
}) {
  function moveUp() {
    // moveAndAdd({ x: 0, y: -1 });
  }

  function moveDown() {
    // moveAndAdd({ x: 0, y: 1 });
  }

  function moveKeyLeft() {
    console.log('input key: left');
    const newBoard = moveLeft(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  function moveKeyRight() {
    console.log('input key: right');
    const newBoard = moveRight(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveKeyLeft);
    addKeyObserver('right', moveKeyRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveKeyLeft);
      removeKeyObserver('right', moveKeyRight);
    };
  });
}
