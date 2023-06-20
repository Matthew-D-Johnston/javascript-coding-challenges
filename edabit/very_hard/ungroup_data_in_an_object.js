"use strict";

function ungroupStudents(teachers) {
  const ungrouped = [];

  teachers.forEach(teacher => {
    teacher.data.forEach(student => {
      ungrouped.push({ teacher: teacher.teacher, ...student });
    });
  });

  return ungrouped;
}

console.log(ungroupStudents([{
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
}]));
