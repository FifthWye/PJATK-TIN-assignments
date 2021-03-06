class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }

  set fullName(name) {
    let splitname = name.split(" ");
    this.name = splitname[0] || "";
    this.surname = splitname[1] || "";
  }
}

class Student extends Person {
  constructor(id, name, surname, grades) {
    super(name, surname);
    this.id = id;
    this.grades = grades;
  }

  get print() {
    return (
      "Id - " +
      this.id +
      " Name - " +
      this.name +
      " " +
      this.surname +
      " Avg grade - " +
      this.avgGrade
    );
  }

  get avgGrade() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }

}

module.exports = Student;
