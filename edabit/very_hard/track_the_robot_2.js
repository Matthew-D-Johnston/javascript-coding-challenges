"use strict";

function trackRobot(...movements) {
  let currentPosition = [0, 0];
  let currentDirection = 'north';

  movements.forEach(movement => {
    switch(currentDirection) {
      case 'north':
        currentPosition[1] += movement;
        currentDirection = 'east';
        break;
      case 'east':
        currentPosition[0] += movement;
        currentDirection = 'south';
        break;
      case 'south':
        currentPosition[1] -= movement;
        currentDirection = 'west';
        break;
      case 'west':
        currentPosition[0] -= movement;
        currentDirection = 'north';
        break;
    }
  });

  return currentPosition;
}

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());
console.log(trackRobot(-10, 20, 10));
