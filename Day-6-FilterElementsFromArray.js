var filter = function (arr, fn) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const greaterThan10 = (n) => {
  return n > 10;
};
const firstIndex = (n, i) => {
  return i === 0;
};
const plusOne = (n) => {
  return n + 1;
};

var arr = [0, 10, 20, 30];
console.log(filter(arr, greaterThan10));

var arr = [1, 2, 3];
console.log(filter(arr, firstIndex));

var arr = [-2, -1, 0, 1, 2];
console.log(filter(arr, plusOne));
