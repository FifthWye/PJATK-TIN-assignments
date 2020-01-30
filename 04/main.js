const factorial = require("./4a.js");
const fibonacci = require("./4b.js");
const palindrome = require("./4c.js");
const alphabeticSort = require("./4d.js");
const longest = require("./4e.js");
const prime = require("./4f.js");
const type = require("./4g.js");
const secondMaxMin = require("./4h.js");
const toCoins = require("./4i.js");
const bSearch = require("./4j.js");

console.log(factorial.rec(5));
console.log(factorial.iter(5));
console.log(fibonacci.calc(5));
console.log(palindrome.check("eye"));
console.log(alphabeticSort.get("webmaster"));
console.log(longest.get("Wow, shiiiiiit!"));
console.log(prime.get(7));
console.log(type.get(7));
console.log(secondMaxMin.get([1, 2, 3, 4, 5, 6, 7]));
console.log(toCoins.get(46, [25, 10, 5, 2, 1]));
const arr = [1, 2, 3, 4, 5, 9];
console.log(bSearch.get(arr, 5, 0, arr.length - 1));