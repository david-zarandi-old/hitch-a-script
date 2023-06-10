import { Coordinate, LayoutElementGenerator } from '../types';
import { DIRECTION } from "../enums";

export const generateRivers: LayoutElementGenerator = (rows, columns, _layout, randomGenerator) => {
  let possibleDirections: DIRECTION[] = [DIRECTION.UP, DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.LEFT];
  let currentDirection: DIRECTION = possibleDirections[
    Math.floor(randomGenerator.next() * possibleDirections.length)
  ];
  let currentCoordinate: Coordinate;

  switch (currentDirection) {
    case DIRECTION.UP:
      // Start from the top
      currentCoordinate = { x: Math.floor(randomGenerator.next() * columns), y: 0 };
      possibleDirections = [DIRECTION.DOWN];
      if (currentCoordinate.x > columns / 2) {
        possibleDirections = possibleDirections.concat(DIRECTION.LEFT);
      } else {
        possibleDirections = possibleDirections.concat(DIRECTION.RIGHT);
      }
      break;
    case DIRECTION.RIGHT:
      // Start from the right
      currentCoordinate = { x: columns - 1, y: Math.floor(randomGenerator.next() * rows) };
      possibleDirections = [DIRECTION.LEFT];
      if (currentCoordinate.y > rows / 2) {
        possibleDirections = possibleDirections.concat(DIRECTION.DOWN);
      } else {
        possibleDirections = possibleDirections.concat(DIRECTION.UP);
      }
      break;
    case DIRECTION.DOWN:
      // Start from the bottom
      currentCoordinate = { x: Math.floor(randomGenerator.next() * columns), y: rows - 1 };
      possibleDirections = [DIRECTION.UP];
      if (currentCoordinate.x > columns / 2) {
        possibleDirections = possibleDirections.concat(DIRECTION.LEFT);
      } else {
        possibleDirections = possibleDirections.concat(DIRECTION.RIGHT);
      }
      break;
    case DIRECTION.LEFT:
      // Start from the left
      currentCoordinate = { x: 0, y: Math.floor(randomGenerator.next() * rows) };
      possibleDirections = [DIRECTION.RIGHT];
      if (currentCoordinate.y > rows / 2) {
        possibleDirections = possibleDirections.concat(DIRECTION.DOWN);
      } else {
        possibleDirections = possibleDirections.concat(DIRECTION.UP);
      }
      break;
  }

  let coordinates: Coordinate[] = [];

  while (
    currentCoordinate.x >= 0 && currentCoordinate.x < columns &&
    currentCoordinate.y >= 0 && currentCoordinate.y < rows
  ) {
    coordinates.push(currentCoordinate);

    currentDirection = possibleDirections[Math.floor(randomGenerator.next() * possibleDirections.length)];
    switch (currentDirection) {
      case DIRECTION.UP:
        currentCoordinate = { x: currentCoordinate.x, y: currentCoordinate.y - 1 };
        break;
      case DIRECTION.RIGHT:
        currentCoordinate = { x: currentCoordinate.x + 1, y: currentCoordinate.y };
        break;
      case DIRECTION.DOWN:
        currentCoordinate = { x: currentCoordinate.x, y: currentCoordinate.y + 1 };
        break;
      case DIRECTION.LEFT:
        currentCoordinate = { x: currentCoordinate.x - 1, y: currentCoordinate.y };
        break;
    }
  }

  return coordinates;
}