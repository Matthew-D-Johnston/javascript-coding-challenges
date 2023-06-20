##### Edabit > Very Hard

---

## Ungroup Data in an Object

#### Problem

##### Instructions:

You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

##### Definitions/Rules (implicit and explicit):

* Ungroup the data so that each object corresponds to an individual student.
* 

##### Input/Output:

* Input: an array of objects with two fields: `teacher` and `data`.
* Output: an array of objects with varying number of fields, but should at least include `teacher` and student `name`.

##### Mental Model:

Iterate over the given array. For each object, iterate over the `data` field. Create an object for each object in the `data` array. The object should contain the teacher as well as the individual data for each student in the `data` objects. Store those objects in a new array.

---

#### Examples / Test Cases

```javascript
ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
```

---

#### Data Structures

##### Input:

* An array of objects.

##### Output:

* An array of objects.

---

#### Algorithm

* Declare an `ungrouped` variable and assign it to an empty array.
* Iterate over each object in the given array.
* Iterate over the `data` field of the current object.
* For each object,  create a copy of the object but make sure to add a `teacher` field with the name of the current teacher.
* Push the copied object to the `ungrouped` array.

---

#### Code

```javascript
function ungroupStudents(teachers) {
  const ungrouped = [];

  teachers.forEach(teacher => {
    teacher.data.forEach(student => {
      ungrouped.push({ teacher: teacher.teacher, ...student });
    });
  });

  return ungrouped;
}
```

