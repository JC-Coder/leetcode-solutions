/**
 * This is a more optimized solution using the "Expand Around Center" approach.
 */

/**
 * @param {string} s
 * @return {string}
 * TC - 0(1)
 * SC - O(n^2)
 * 
 * How this works: 
 * We take each alphabet and consider it a potential start for a palindrome then we expand by checking if the next 2 after it are also equal. e.g bab . 
 * we start from b -> left and right would be index (0,0). when then we expand by decreasing left and increasing right . 
 * so left becomes -1 and right becomes 1. left is out of range so we won't proceed. we then take the next index which is a. 
 * left (1)[a], right (1 )[a]
 * left (0)[b], right (2)[b] so index 0 and 2 are the same signifying that bab is a palindrome so we have to keep track of the start which is 1 and the max length which is (right - left [2 - 0] = 2) but then we have to also add + 1 so we can account for the current word at index 2 [b]. 
 * so our start become [0 , the value of left] and max length become 2+1 = 3. 
 * then we extract the substring at the end (our return function) -> s.substring(0, 3) would give us "bab" 
 */
var longestPalindrome = function (s) {
  let start = 0;
  let maxLen = 0;
  let slen = s.length;

  function checkPali(left, right) {
    while (left >= 0 && right < slen && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        start = left;
        maxLen = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < slen; i++) {
    checkPali(i, i);
  }

  for (let i = 0; i < slen - 1; i++) {
    checkPali(i, i + 1);
  }

  return s.substring(start, start + maxLen);
};

console.log(longestPalindrome("babad")); // bab;
console.log(longestPalindrome("cbbd")); // bb;
console.log(longestPalindrome("a")); // a;
