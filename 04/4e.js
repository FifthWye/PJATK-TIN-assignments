function longest(str) {
  var str = str.split(" ");
  var longestIndex = 0;
  var word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[longestIndex].length < str[i].length) {
      longestIndex = i;
      word = str[i];
    }
  }
  return word;
}

module.exports = {
  get: longest
};
