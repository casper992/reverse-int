module.exports = function reverse (n) {
  let x = '' + Math.abs(n);
  return x.split('').reverse().join('');
}
