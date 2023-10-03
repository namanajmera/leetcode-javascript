var reduce = function (nums, fn, init) {
  var value = init;
  for (let i = 0; i < nums.length; i++) {
    value = fn(value, nums[i]);
  }
  return value;
};

const sum = (accum, curr) => {
  return accum + curr;
};

const mul = (accum, curr) => {
  return accum + curr * curr;
};

var nums = [1, 2, 3, 4];
var init = 0;
console.log(reduce(nums, sum, init));

nums = [1, 2, 3, 4];
init = 100;
console.log(reduce(nums, mul, init));
