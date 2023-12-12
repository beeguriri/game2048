import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import {
  isSameBoard,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from '@utils/tile2';
import { useEffect } from 'react';

export default function useMoveTile2({
  board,
  setBoard,
}: {
  board: number[][];
  setBoard: (board: number[][]) => void;
}) {
  function moveKeyUp() {
    const newBoard = moveUp(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  function moveKeyDown() {
    const newBoard = moveDown(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  function moveKeyLeft() {
    const newBoard = moveLeft(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  function moveKeyRight() {
    const newBoard = moveRight(board);
    if (isSameBoard(newBoard, board)) alert('game over');
    setBoard(newBoard);
  }

  useEffect(() => {
    addKeyObserver('up', moveKeyUp);
    addKeyObserver('down', moveKeyDown);
    addKeyObserver('left', moveKeyLeft);
    addKeyObserver('right', moveKeyRight);

    return () => {
      removeKeyObserver('up', moveKeyUp);
      removeKeyObserver('down', moveKeyDown);
      removeKeyObserver('left', moveKeyLeft);
      removeKeyObserver('right', moveKeyRight);
    };
  });
}
