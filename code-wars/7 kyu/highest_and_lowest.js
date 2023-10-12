function highAndLow(numbers) {
  let numsArray = numbers.split(' ');
  let highest = -Infinity;
  let lowest = Infinity;

  numsArray.forEach(num => {
    let intNum = parseInt(num, 10);

    if (intNum > highest) {
      highest = intNum;
    }
    if (intNum < lowest) {
      lowest = intNum;
    }
  });

  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
