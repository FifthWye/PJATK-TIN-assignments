function secondMaxMin(arr) {
  arr.sort(function(x, y) {
    return x - y;
  });
  var uniqa = [arr[0]];
  var result = [];

  for (var j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) {
      uniqa.push(arr[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(",");
}

module.exports = {
  get: secondMaxMin
};

