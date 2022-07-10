function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
if(this.marks === undefined){ 
      this.marks = [mark];
  } else { 
  this.marks.push(mark);
  }
}

Student.prototype.addMarks =  function(...mark) {
if (this.marks === undefined) { 
this.marks = [mark];
} else {
  this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
let sum = 0;
this.marks.forEach(item => {sum += item});
return sum / this.marks.length
}

Student.prototype.exclude = function(reason) {
this.exclude = reason;

delete this.subject;
delete this.marks;
}

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
