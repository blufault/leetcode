/**
 * Reverse string
 *
 * Write a function that revereses a string. The input string is given as an
 * array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifiying the
 * input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * @params s string
 * @return void
 */

const reverseString = function reverseString(s) {
  let tmp = undefined;

    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        let mirrorIndex = (s.length - 1) - i;
        tmp = s[i];
        s[i] = s[mirrorIndex];
        s[mirrorIndex] = tmp;
    }
};
