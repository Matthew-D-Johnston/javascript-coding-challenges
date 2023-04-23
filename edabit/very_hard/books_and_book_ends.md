##### Edabit > JavaScript > Very Hard

---

## Books and Book Ends

#### Problem

##### Instructions:

Suppose a **pair of identical characters** serve as **book ends** for all characters in between them. Write a function that returns the **total number of unique characters** (books, so to speak) between all **pairs** of book ends.

The function will look like:

```
countUniqueBooks("stringSequence", "bookEnd")
```

_Notes_

- No book characters will be identical to the bookend character.
- There will always be an even number of bookends.
- Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
- Return `0` if bookends contain zero books.

##### Definitions/Rules (explicit and implicit):

* Book ends: a pair of identical characters with zero or more characters in between.
* Find number of unique characters (i.e. books) between all pairs of book ends.
* Book characters will not be identical to the bookend character.
* Bookends come in pairs. Once a bookend is used to complete a pair, a new bookend must be found to create another pair.

##### Input/Output:

* Inputs: a sequence of characters and a "bookend" character.
* Output: the total number of unique characters between all pairs of books.

##### Mental Model:

Take the given sequence and split it into groups of characters separated by the bookend character. Eliminate every other character grouping since those fall on the outside of the bookend pairs. Then iterate over the remaining character groupings. Iterate over each character and add that character to an array if it is not already included. After all iterations have completed, count the number of characters in the result array.

---

#### Examples / Test Cases

```javascript
countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4

// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// 2nd bookend group: "ATTTA": 1 unique book: "T"
// "ABBCA" not included since the first "A" was used in the 1st bookend group.

countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3

countUniqueBooks("ZZABCDEF", "Z") ➞ 0
```

---

#### Data Structures

##### Input:

* A string of characters.
* And a string of a single character.

##### Output:

* An integer.

---

#### Algorithm

* Split the given string sequence along the special "bookend" chracter.
* Iterate over the resulting array and push the character groups with odd indexes to a `bookGroups` array
* Declare a `uniqueChars` variable and assign it to an empty array.
* Then iterate over the `bookGroups` array.
* For each character grouping, iterate over each character.
* If the character is not in the `uniqueChars` array, then add it to the array.
* After all iterations have completed, return the length of the `uniqueChars` array.

---

#### Code

```javascript
function countUniqueBooks(sequence, bookend) {
  let splitSequence = sequence.split(bookend);
  let bookGroups = []

  for (let index = 1; index < splitSequence.length; index += 2) {
    bookGroups.push(splitSequence[index]);
  }

  let uniqueChars = [];

  bookGroups.forEach(group => {
    group.split('').forEach(char => {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    });
  });

  return uniqueChars.length;
}
```

