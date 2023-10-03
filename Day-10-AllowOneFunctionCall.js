var once = function (fn) {
  var isCalled = false;
  return function (...args) {
    if (!isCalled) {
      var result = fn(...args);
      isCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
