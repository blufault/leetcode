/**
 * Given a non-empty array of intergers, every element appears twice excetp for one.
 */

// Lets assume that it is a non-empty array
// Let assume there is always going to be one integer that appears

// Runtime:O(n)
// Space: O(n)

function single_number(arr) {
  const storage = {};

  arr.forEach(num => {
    if (storage[num]) {
      storage[num] = ++storage[num];
    } else {
      storage[num] = 1;
    }
  });

  return Object.keys(storage).reduce((accum, key) => {
    if (storage[key] === 1) {
      accum = key;
    }

    return accum;
  }, 0);
}

// NOTE: Could you implement it without using extra memory?
function single_number_no_memory(arr) {
  let tmp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    tmp = tmp ^ arr[i];
  }

  return tmp;
}

//console.log(single_number([2, 2, 1, 2, 2]));
//console.log(single_number([4, 1, 2, 1, 2]));
//console.log(single_number_no_memory([2, 2, 1, 2, 2]));
//console.log(single_number_no_memory([4, 1, 2, 1, 2]));
//console.log(single_number_no_memory([2, 2, 1]));
//console.log(single_number_no_memory([3, 2, 1, 5, 4, 2, 3, 1, 4]));
console.log(single_number_no_memory([2, 2, 3, 2]));
console.log(single_number_no_memory([0, 1, 0, 1, 0, 1, 99]));
//
//
//
//4: 0100
//1: 0001
//XOR: 0101
//
//0101
//2: 0010
//XOR: 0111
//
//0111
//1: 0001
//XOR: 0110
//
//0110
//2: 0010
//XOR: 0100
//
//
//
//2: 0010
//2: 0010
//XOR: 0000
//
//0000
//1: 0001
//XOR: 0001
