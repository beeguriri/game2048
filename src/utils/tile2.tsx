import { MAX_POS } from '@assets/constant';
import { getRandomInteger } from './number';

/* 같은 보드인지 확인 */
export const isSameBoard = (
  board1: number[][],
  board2: number[][],
): boolean => {
  return board1.every((row, r) => {
    return row.every((n, c) => {
      return board2[r][c] === n;
    });
  });
};

/* 새로운 타일 생성 할 수 있는지 확인 */
const isPossibleNewTile = (board: number[][]): boolean => {
  let check = false;
  board.forEach((row) =>
    row.forEach((n) => {
      if (n === 0) check = true;
    }),
  );
  return check;
};

/* 새로운 타일 생성 */
export const generateNewTile = (board: number[][]): number[][] => {
  if (!isPossibleNewTile(board)) return board;

  const row = getRandomInteger(1, MAX_POS) - 1;
  const col = getRandomInteger(1, MAX_POS) - 1;

  if (board[row][col] === 0) {
    board[row][col] = 2;
    return board;
  } else return generateNewTile(board);
};

export const initialBoardSetting = (board: number[][]): number[][] => {
  let newBoard = generateNewTile(board);
  newBoard = generateNewTile(newBoard);
  return newBoard;
};

/* 숫자 합치기 */
const combineLRTile = (board: number[][]) => {
  const newBoard = Array.from(board);
  for (let row = 0; row < MAX_POS; row++) {
    for (let col = 0; col < MAX_POS - 1; col++) {
      if (newBoard[row][col] === newBoard[row][col + 1]) {
        newBoard[row][col] = newBoard[row][col] + newBoard[row][col + 1];
        newBoard[row][col + 1] = 0;
      }
    }
  }
  return newBoard;
};

const combineUDTile = (board: number[][]) => {
  const newBoard = Array.from(board);
  for (let col = 0; col < MAX_POS; col++) {
    for (let row = 0; row < MAX_POS - 1; row++) {
      if (newBoard[row][col] === newBoard[row + 1][col]) {
        newBoard[row][col] = newBoard[row][col] + newBoard[row + 1][col];
        newBoard[row + 1][col] = 0;
      }
    }
  }
  return newBoard;
};

/* 왼쪽으로 옮기기 */
const slideLeft = (board: number[][]) => {
  return board.map((row) => {
    const remain = row.filter((n) => n !== 0);
    const zero_cnt = MAX_POS - remain.length;
    const newRow = remain.concat(Array(zero_cnt).fill(0));
    return newRow;
  });
};

/* 왼쪽 버튼 눌렀을 때 */
export const moveLeft = (board: number[][]) => {
  let newBoard = slideLeft(board);
  newBoard = combineLRTile(newBoard);
  newBoard = slideLeft(newBoard);

  if (isSameBoard(board, newBoard)) return board;
  return generateNewTile(newBoard);
};

/* 오른쪽으로 옮기기 */
const slideRight = (board: number[][]) => {
  return board.map((row) => {
    const remain = row.filter((n) => n !== 0);
    const zero_cnt = MAX_POS - remain.length;
    const newRow = Array(zero_cnt).fill(0).concat(remain);
    return newRow;
  });
};

/* 오른쪽 버튼 눌렀을 때 */
export const moveRight = (board: number[][]) => {
  let newBoard = slideRight(board);
  newBoard = combineLRTile(newBoard);
  newBoard = slideRight(newBoard);

  if (isSameBoard(board, newBoard)) return board;
  return generateNewTile(newBoard);
};

/* 위쪽으로 옮기기 */
const slideUp = (board: number[][]) => {
  const newBoard: number[][] = Array.from(new Array(MAX_POS), () =>
    new Array(MAX_POS).fill(0),
  );
  for (let col = 0; col < MAX_POS; col++) {
    const temp: number[] = [];

    for (let row = 0; row < MAX_POS; row++) {
      if (board[row][col] !== 0) temp.push(board[row][col]);
    }
    const zero_cnt = MAX_POS - temp.length;
    const newRow = temp.concat(Array(zero_cnt).fill(0));

    for (let row = 0; row < MAX_POS; row++) {
      newBoard[row][col] = newRow[row];
    }
  }
  return newBoard;
};

/* 위쪽 버튼 눌렀을 때 */
export const moveUp = (board: number[][]) => {
  let newBoard = slideUp(board);
  newBoard = combineUDTile(newBoard);
  newBoard = slideUp(newBoard);

  if (isSameBoard(board, newBoard)) return board;
  return generateNewTile(newBoard);
};

/* 아래쪽으로 옮기기 */
const slideDown = (board: number[][]) => {
  const newBoard: number[][] = Array.from(new Array(MAX_POS), () =>
    new Array(MAX_POS).fill(0),
  );
  for (let col = 0; col < MAX_POS; col++) {
    const temp: number[] = [];

    for (let row = 0; row < MAX_POS; row++) {
      if (board[row][col] !== 0) temp.push(board[row][col]);
    }
    const zero_cnt = MAX_POS - temp.length;
    const newRow = Array(zero_cnt).fill(0).concat(temp);

    for (let row = 0; row < MAX_POS; row++) {
      newBoard[row][col] = newRow[row];
    }
  }
  return newBoard;
};

/* 아래쪽 버튼 눌렀을 때 */
export const moveDown = (board: number[][]) => {
  let newBoard = slideDown(board);
  newBoard = combineUDTile(newBoard);
  newBoard = slideDown(newBoard);

  if (isSameBoard(board, newBoard)) return board;
  return generateNewTile(newBoard);
};

/* 게임 종료 확인 */
export const isGameOver = (board: number[][]) => {
  return (
    moveLeft(board) === board &&
    moveRight(board) === board &&
    moveUp(board) === board &&
    moveDown(board) === board
  );
};
