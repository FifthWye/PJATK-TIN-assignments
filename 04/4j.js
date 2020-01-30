function bSearch(arr, x, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;
  if (arr[mid] > x) return bSearch(arr, x, start, mid - 1);
  else return bSearch(arr, x, mid + 1, end);
}

module.exports = {
  get: bSearch
};


