function squareDigits(num) {
  let strNum = String(num);
  let resultStrNum = "";

  for (let idx = 0; idx < strNum.length; idx += 1) {
    let square = parseInt(strNum[idx], 10)**2;
    resultStrNum += String(square);
  }

  return parseInt(resultStrNum, 10);
}

console.log(squareDigits(9119));
