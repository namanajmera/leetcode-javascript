var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

const plusone = (val, index) => {
  return val + 1;
};

const plusI = (val, index) => {
  return val + index;
};

const constant = () => {
  return 42;
};

var arr = [1, 2, 3];
console.log(map(arr, plusone));
var arr = [1, 2, 3];
console.log(map(arr, plusI));
var arr = [1, 2, 3];
console.log(map(arr, constant));
