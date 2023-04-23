##### Edabit > JavaScript > Very Hard

---

## Stack Calculator

#### Problem

##### Instructions:

A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.

The argument passed to `run(instructions)` will always be a string containing a series of instructions.
The instruction set of the calculator will be this:

- `+`: Pop the last 2 values from the stack, add them, and push the result onto the stack.
- `-`: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
- `*`: Pop the last 2 values, multiply, and push the result.
- `/`: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
- `DUP`: Duplicate (not double) the top value on the stack.
- `POP`: Pop the last value from the stack and discard it.
- `PSH`: Performed whenever a number appears as an instruction. Push the number to the stack.
- Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"

_Notes_

- If there are no instructions, the value should remain 0.
- The return value of `get value()` should be the topmost value on the stack.

##### Definitions/Rules (explicit and implicit):

* Instructions are given in a string and each individual instruction is separated by a space.
* Create a class.
* The class must have a `run(instructions)` method. This is where the calculator functionality will be implemented.
* It must also have a `get value()` getter method that returns the topmost value on the stack.

##### Input/Output:

* Input: a string of instructions.
* Output: either a number, which is the result of the calculations, or a string stating `'Invalid instruction: {the invalid instruction}'`.

##### Mental Model:

Take the instructions. Split them into individual commands in an array. Iterate over the array and apply the command.

---

#### Examples / Test Cases

```javascript
StackCalc("")
// => 0

StackCalc("5 6 +")
// => 11

StackCalc("3 DUP +")
// => 6

StackCalc("6 5 5 7 * - /")
// => 5

StackCalc("x y +")
// => Invalid instruction: x
```

---

#### Data Structures

##### Input:

* A string.

##### Output:

* A number or a string.

---

#### Algorithm

* Set up a `StackCalc` class.
* In the `constructor()` method, define a `stack` variable and a `result` variable.
* The `get value()` getter method returns the topmost value from the `stack`.
* The `run(instructions)` method implements all the functionality.
* It will use a `switch` statement.
* 

---

#### Code

```javascript
"use strict";

class StackCalc {
  constructor() {
		this.stack = [];
  }

  run(instructions) {
    if (instructions.length === 0) {
      return 0;
    }

    let invalid = [];
		let instructionsArray = instructions.split(' ');

    instructionsArray.forEach(instruction => {
      let command;
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(instruction)) {
        command = 'PSH';
      } else {
        command = instruction;
      }

      let lastValue;
      let secondLastValue;

      switch(command) {
        case '+':
          lastValue = this.stack.pop() || 0;
          secondLastValue = this.stack.pop() || 0;
          this.stack.push(lastValue + secondLastValue);
          break;
        case '-':
          lastValue = this.stack.pop() || 0;
          secondLastValue = this.stack.pop() || 0;
          this.stack.push(lastValue - secondLastValue);
          break;
        case '*':
          lastValue = this.stack.pop() || 0;
          secondLastValue = this.stack.pop() || 0;
          this.stack.push(lastValue * secondLastValue);
          break;
        case '/':
          lastValue = this.stack.pop() || 0;
          secondLastValue = this.stack.pop() || 0;
          this.stack.push(lastValue / secondLastValue);
          break;
        case 'DUP':
          let topValue = this.stack[this.stack.length - 1];
          this.stack.push(topValue);
          break;
        case 'POP':
          this.stack.pop();
          break;
        case 'PSH':
          this.stack.push(Number(instruction));
          break;
        default:
          if (invalid.length === 0) {
            invalid.push(instruction);
          }
          break;
      }
      

    });

    if (invalid.length === 0) {
      return this.stack[this.stack.length - 1];
    } else {
      return `Invalid instruction: ${invalid[0]}`;
    }

  }

  get value() {
		return this.stack[this.stack.length - 1];
  }
}

let stackCalc = new StackCalc();

console.log(stackCalc.run(""));
console.log(stackCalc.run("5 6 +"));
console.log(stackCalc.run("3 DUP +"));
console.log(stackCalc.run("6 5 5 7 * - /"));
console.log(stackCalc.run("x y +"));
```

This code did not pass all of Edabit's tests.

