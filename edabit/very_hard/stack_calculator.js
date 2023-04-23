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


