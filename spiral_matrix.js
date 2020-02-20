const spiral_matrix = (nested) => {
  const push_backwards = (accum, array) => {
      for (let i = array.length - 1; i >= 0; i--) { // push elements backwards in our accum
        accum.push(array[i]);
      }
  };
  const stack = [];
  const another_stack = [];

  if (nested.length < 2) return nested;

  return nested.reduce((accum, array, index) => {
    if (index === 0) {
      accum.push(...array);
    } else if (index === nested.length - 1) { // when we have reached our last array in the matrix
      push_backwards(accum, array);

      // pop the stack
      if (stack.length) {
        while (stack.length) {
          const popped = stack.pop();
          accum.push(popped.shift());
          another_stack.push(popped);
        }
        accum.push(spiral_matrix(another_stack));
      }
      //stack.length && stack.pop().forEach(x => accum.push(x));
    } else {
      // pop array & append to accum
      accum.push(array.pop());
      // push modified array to stack
      stack.push(array);
    }

    return accum;
  }, []);
};

console.log(spiral_matrix([[1, 2], [4, 3]]));
console.log(spiral_matrix([[1, 2, 3], [8, 9, 4], [7, 6, 5]]));
console.log(spiral_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(spiral_matrix([[1, 2, 3, 4], [13, 14, 15, 5], [12, 17, 16, 6], [11, 10, 8, 7]]));
