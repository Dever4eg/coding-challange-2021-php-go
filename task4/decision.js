import { createHash } from "crypto";

const MOVE_LEFT = 'L', MOVE_UP = 'U', MOVE_RIGHT = 'R', MOVE_DOWN = 'D';
const ALLOWED_LETTERS = ['b', 'c', 'd', 'e', 'f']

const md5 = input => createHash('md5').update(input).digest('hex');

const isAllowedToMove = (x, y, direction, hash) => {
  const [upLetter, downLetter, leftLetter, rightLetter] = hash.split('')

  if (direction === MOVE_LEFT && x === 0)  return false;
  if (direction === MOVE_RIGHT && x === 3) return false;
  if (direction === MOVE_UP && y === 0)    return false;
  if (direction === MOVE_DOWN && y === 3)  return false;

  if (direction === MOVE_LEFT)  return ALLOWED_LETTERS.includes(leftLetter);
  if (direction === MOVE_RIGHT) return ALLOWED_LETTERS.includes(rightLetter);
  if (direction === MOVE_UP)    return ALLOWED_LETTERS.includes(upLetter);
  if (direction === MOVE_DOWN)  return ALLOWED_LETTERS.includes(downLetter);

  throw new Error('Something went wrong')
};

const findSolution = (password, decision = '', x = 0, y = 0) => {
  if (x === 3 && y === 3) {
    return decision;
  }

  const hash4 = md5(password + decision).substr(0, 4)

  const decisions = []

  if (isAllowedToMove(x, y, MOVE_RIGHT, hash4)) {
    decisions.push(findSolution(password, decision + MOVE_RIGHT, x + 1, y));
  }

  if (isAllowedToMove(x, y, MOVE_DOWN, hash4)) {
    decisions.push(findSolution(password, decision + MOVE_DOWN, x, y + 1));
  }

  if (isAllowedToMove(x, y, MOVE_LEFT, hash4)) {
    decisions.push(findSolution(password, decision + MOVE_LEFT, x - 1, y));
  }

  if (isAllowedToMove(x, y, MOVE_UP, hash4)) {
    decisions.push(findSolution(password, decision + MOVE_UP, x, y - 1));
  }

  return decisions.filter(d => !!d).sort((a, b) => b.length - a.length).pop();
};

export { findSolution };
