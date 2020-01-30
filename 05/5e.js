class Student {
  constructor(id, grades) {
    this.name = "";
    this.surname = "";
    this.id = id;
    this.grades = grades;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }

  set fullName(name) {
    let splitname = name.split(" ");
    this.name = splitname[0] || "";
    this.surname = splitname[1] || "";
  }

  get avgGrade() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
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
}

module.exports = Student;
