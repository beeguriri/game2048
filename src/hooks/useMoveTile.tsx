import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import {
  isGameOver,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from '@utils/tile2';
import { useCallback, useEffect } from 'react';

export default function useMoveTile({
  board,
  setBoard,
  setIsGameOver,
}: {
  board: number[][];
  setBoard: (board: number[][]) => void;
  setIsGameOver: (isGameOver: boolean) => void;
}) {
  const moveKeyUp = useCallback(() => {
    const newBoard = moveUp(board);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver]);

  const moveKeyDown = useCallback(() => {
    const newBoard = moveDown(board);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver]);

  const moveKeyLeft = useCallback(() => {
    const newBoard = moveLeft(board);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver]);

  const moveKeyRight = useCallback(() => {
    const newBoard = moveRight(board);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver]);

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
  }, [moveKeyDown, moveKeyLeft, moveKeyRight, moveKeyUp]);
}
