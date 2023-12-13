import { addKeyObserver, removeKeyObserver } from '@utils/keyboard';
import { isGameOver, moveDown, moveLeft, moveRight, moveUp } from '@utils/tile';
import { useCallback, useEffect } from 'react';

export default function useMoveTile({
  board,
  score,
  setBoard,
  setIsGameOver,
  setScore,
}: {
  board: number[][];
  score: number;
  setBoard: (board: number[][]) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  setScore: (score: number) => void;
}) {
  const moveKeyUp = useCallback(() => {
    const newBoard = moveUp(board, score, setScore);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver, score, setScore]);

  const moveKeyDown = useCallback(() => {
    const newBoard = moveDown(board, score, setScore);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver, score, setScore]);

  const moveKeyLeft = useCallback(() => {
    const newBoard = moveLeft(board, score, setScore);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver, score, setScore]);

  const moveKeyRight = useCallback(() => {
    const newBoard = moveRight(board, score, setScore);
    if (isGameOver(newBoard)) setIsGameOver(true);
    setBoard(newBoard);
  }, [board, setBoard, setIsGameOver, score, setScore]);

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
