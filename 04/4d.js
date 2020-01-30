function alphabeticSort(str) {
  var arr = str.split("");
  var sorted = arr.sort();
  return sorted.join("");
}

module.exports = {
  get: alphabeticSort
};
