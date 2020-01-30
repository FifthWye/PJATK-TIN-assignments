const courses = ["TIN", "BYT", "ZPR"]; 

function Student(name, surname, id){
    this.name = name;
    this.surname = surname;
    this.id = id;
}

Student.prototype.courses = courses;

module.exports = Student;