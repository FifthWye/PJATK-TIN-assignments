function factorialRec(n) {
  if (n == 0 || n == 1) return 1;

  return factorialRec(n - 1) * n;
}

let factorialIter = function(n) {
  let rval = 1;
  for (let i = 2; i <= n; i++) rval = rval * i;
  return rval;
};

module.exports = {
  rec: factorialRec,
  iter: factorialIter
};
