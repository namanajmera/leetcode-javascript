var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) {
        throw new Error("Not Equal");
      } else {
        return true;
      }
    },

    notToBe: (val3) => {
      if (val === val3) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
};

const test = expect(5).toBe(5);
const test1 = expect(5).notToBe(5);
console.log(test);
console.log(test1);
