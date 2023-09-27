var createCounter = function (init) {
  const defaultValue = init;
  const increment = () => {
    return (init += 1);
  };

  const reset = () => {
    init = defaultValue;
    return init;
  };

  const decrement = () => {
    return (init -= 1);
  };

  return {
    increment,
    reset,
    decrement,
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
