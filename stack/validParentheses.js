/**
 * Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[', ']'
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *
 *  Note that an empty string is also considered valid.
 */

const isValid = function isValid(s) {
  let stack = [];

  return s.split('').reduce((accum, char) => {
    if (char === '(' || char === '[' || char === '{') {
            accum.push(char);
        }

        if (char === ')' || char === ']' || char === '}') {
            // peek at the top, and make sure it matches
            const top = accum.length - 1;
            if ((accum[top] === '(' && char === ')') ||
               (accum[top] === '[' && char === ']') ||
               (accum[top] === '{' && char === '}') ) {
                accum.pop();
            } else {
                accum.push(0);
            }
        }
        return accum;
  }, stack).length ? false : true;
};
