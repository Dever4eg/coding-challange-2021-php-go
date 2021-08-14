const TOP = 'top', LEFT = 'left', RIGHT = 'right', BOTTOM = 'bottom';
const DIRECTION_LEFT = 'L', DIRECTION_RIGHT = 'R';

const turn = (currentAngle, direction) => {
  if (currentAngle === TOP && direction === DIRECTION_LEFT) return LEFT;
  if (currentAngle === RIGHT && direction === DIRECTION_LEFT) return TOP;
  if (currentAngle === BOTTOM && direction === DIRECTION_LEFT) return RIGHT;
  if (currentAngle === LEFT && direction === DIRECTION_LEFT) return BOTTOM;

  if (currentAngle === TOP && direction === DIRECTION_RIGHT) return RIGHT;
  if (currentAngle === RIGHT && direction === DIRECTION_RIGHT) return BOTTOM;
  if (currentAngle === BOTTOM && direction === DIRECTION_RIGHT) return LEFT;
  if (currentAngle === LEFT && direction === DIRECTION_RIGHT) return TOP;

  throw new Error(`Wrong direction given: ${direction}`)
};

const move = (currentX, currentY, currentAngle, n) => {
  if (currentAngle === TOP) return {x: currentX, y: currentY + n, angle: currentAngle};
  if (currentAngle === RIGHT) return {x: currentX + n, y: currentY, angle: currentAngle};
  if (currentAngle === BOTTOM) return {x: currentX, y: currentY - n, angle: currentAngle};
  if (currentAngle === LEFT) return {x: currentX - n, y: currentY, angle: currentAngle};
};

const findCoordinates = (steps) => {
  return steps
    .split(', ')
    .map(step => {
      const direction = step.charAt(0);
      const n = step.substr(1, step.length);
      return { direction, n: parseInt(n) }
    })
    .reduce(
      ({ x, y, angle }, { direction, n }) => {
        return move(x, y, turn(angle, direction), n)
      },
      { x: 0, y: 0, angle: TOP }
    )
};

export default findCoordinates;
