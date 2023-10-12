const disemvowel = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str[i])) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(disemvowel('This website is for losers LOL'));
