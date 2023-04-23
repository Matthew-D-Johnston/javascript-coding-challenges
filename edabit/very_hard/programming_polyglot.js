"use strict";

function getLanguages(score) {
  const LanguagePoints = {
    '1': 'C#',
    '2': 'C++',
    '4': 'Java',
    '8': 'JavaScript',
    '16': 'PHP',
    '32': 'Python',
    '64': 'Ruby',
    '128': 'Swift'
  }

  const Points = Object.keys(LanguagePoints).map(point => Number(point));
  Points.sort((a, b) => b - a);
  
  let proficientLanguages = [];

  while (score > 0) {
    let currentPoints;

    for (let index = 0; index < Points.length; index += 1) {
      if (Points[index] <= score) {
        currentPoints = Points[index];
        break;
      }
    }

    proficientLanguages.push(LanguagePoints[String(currentPoints)]);
    
    score -= currentPoints;
  }

  return proficientLanguages.sort();
}

console.log(getLanguages(25));
console.log(getLanguages(100));
console.log(getLanguages(53));
