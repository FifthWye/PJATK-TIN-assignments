const a = require("./5a.js");
const bStudent = require("./5b.js");
const cStudent = require("./5c.js");
const dStudent = require("./5d.js");
const eStudent = require("./5e.js");
const fStudent = require("./5f.js");

const user = {
  id: 1,
  name: "Leanne Graham",
  surname: "Bret",
  talk: function() {
    console.log("Hi, I'm Leanne");
  },
  walk: function() {
    console.log("Walked 10 m ");
  },
  jump: function() {
    console.log("Seems like i broke my leg");
  }
};

console.log(a.get(user));

const b = new bStudent("Forrest", "Gump", 1, [2, 5, 3, 5]);
console.log(b.print());

const c = new cStudent();
console.log(c.courses);

const d = new dStudent(2, [5, 5, 5, 5]);
d.fullName = "Rick Sanchez";
console.log("Name - " + d.fullName + " | Avg grade - " + d.avgGrade);
console.log(d.print);


const e = new eStudent(3, [4, 5, 4, 4]);
e.fullName = "Rick Sanchez235";
console.log("Name - " + e.fullName + " | Avg grade - " + e.avgGrade);
console.log(e.print);

const f = new fStudent(4,"Rick","Sanchez735", [1, 1, 1, 1]);
f.fullName = "Rick Sanchez735";
console.log("Name - " + f.fullName + " | Avg grade - " + f.avgGrade);
console.log(f.print);

