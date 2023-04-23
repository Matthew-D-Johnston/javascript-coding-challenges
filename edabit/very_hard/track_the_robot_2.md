##### Edabit > JavaScript > Very Hard

---

## Track the Robot (Part 2)

#### Problem

##### Instructions:

This robot roams around a 2D grid. It starts at `(0, 0)` facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements `20, 30, 10, 40` then it will move:

- 20 steps North, now at `(0, 20)`
- 30 steps East, now at `(30, 20)`
- 10 steps South. now at `(30, 10)`
- 40 steps West, now at `(-10, 10)`

...and will end up at coordinates `(-10, 10)`.

_Notes_

Each movement is an integer (whole number).

##### Definitions/Rules (explicit and implicit):

* Starting position: `(0, 0)`
* Starting direction: North.
* After each move, the robot rotates 90 degrees clockwise.
* Each move is given as an integer, positive or negative.
* The first element of the position is the east-west axis; the second element is the north-south axis.

##### Input/Output:

* Input: an indeterminate number of movements.
* Output: the ending position.

##### Mental Model:

Take the given movements. Iterate over each movement. If the current position is North, then move in the positive direction along the north-south axis. Then change the current position to East. If the current position is East, then move in the positive direction along the east-west axis. Then change the current position to South. If the current position is South, then move in the negative direction along the north-south axis. Then change the current position to West. If the current position is West, move in the negative direction along the east-west axis. Then change the current position to North.

---

#### Examples / Test Cases

```javascript
trackRobot(20, 30, 10, 40);
// => [-10, 10]
trackRobot();
// => [0, 0]
trackRobot(-10, 20, 10)
// => [20, -20]
```

---

#### Data Structures

##### Input:

* An indeterminate number of integers.

##### Output:

* An array with two elements, which are integers.

---

#### Algorithm

* Use a rest parameter for the function of `...movements`
* Declare a `currentPosition` variable and set it to `[0, 0]`
* Declare a `currentDirection` variable and set it to `'north'`
* iterate over the `movements` array.
* Set up a `switch` statement for each of the four direction cases (i.e., north, east, south, and west).
* If `currentDirection === 'north'`:
  * Increase `currentPosition[1]` by the amount of the current `movement`.
  * Change the `currentDirection` variable to `'east'`.
* If `currentDirection === 'east'`:
  * Increase `currentPosition[0]` by the amount of the current `movement`.
  * Change the `currentDirection` variable to `'south'`.
* If `currentDirection === 'south'`:
  * Decrease `currentPosition[1]` by the amount of the current `movement`.
  * Change the `currentDirection` variable to `'west'`.
* If `currentDirection === 'west'`:
  * Decrease `currentPosition[0]` by the amount of the current `movement`.
  * Change the `currentDirection` variable to `'north'`.
* After iterating over all the `movements`, return the `currentPosition` variable.

---

#### Code

```javascript
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
```

