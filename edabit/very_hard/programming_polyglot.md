##### Edabit > JavaScript > Very Hard

---

## Programming Polyglot

#### Problem

##### Instructions:

Create a function that takes a number that represents a person's programming language score, and returns an alphabetised array of programming languages they are proficient in. Arbitrarily assigned points for each language are listed below:

| Language   | Points |
| ---------- | ------ |
| C#         | 1      |
| C++        | 2      |
| Java       | 4      |
| JavaScript | 8      |
| PHP        | 16     |
| Python     | 32     |
| Ruby       | 64     |
| Swift      | 128    |

_Notes_

Easier using bitwise operations.

##### Definition/Rules (explicit and implicit):

* Programming language score: an arbitrarily assigned score (see chart above).
* Organize output array in alphabetical order.
* Points are total points.
* Find the first language that is less than or equal to the score. Then subtract those points from the score and repeat the process until the total score has been accounted for.

##### Input/Output:

* Input: the score.
* Output: an array of programming languages that the programmer is proficient in.

##### Mental Model

Given the total score, find the programming languages the programmer is proficient in. This begins by finding the language with the highest points that are not greater than the score. Those points are then deducted from the score. With the score now reduced, find the next programming language with the highest number of points that are still less than or equal to the current reduced score. Keep doing this process until the score is 0. Keep track of the languages in an array. Sort the array so that it is in alphabetical order.

---

#### Examples / Test Cases

```javascript
getLanguages(25)
// => ["C#", "JavaScript", "PHP"]

getLanguages(100)
// => ["Java", "Python", "Ruby"]

getLanguages(53)
// => ["C#", "Java", "PHP", "Python"]
```

---

#### Data Structures

##### Input:

* An integer.

##### Output:

* An array of strings.

---

#### Algorithm

* Define an object, `LanguagePoints`, whose keys are points and whose values are the corresponding language.
* Declare a `points` array that contains the keys of the `LanguagePoints` object sorted in descending order.
* Declare a `proficientLanguages` variable and set it to an empty array.
* Begin a `while` loop that continues while the score is greater than 0.
* Inside the loop, declare a `currentPoints` variable.
* Iterate over the `points` array. The first element of the array that is less than current score, set equal to the `currentPoints` variable.
* Look up the language in the `LanguagePoints` variable using the `currentPoints` variable.
* Push the resulting language to the `proficientLanguages` array.
* Decrement the `score` variable by the `currentPoints`.
* When the loop is finished, return the `proficientLanguages` array.

---

#### Code

```javascript
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
```

