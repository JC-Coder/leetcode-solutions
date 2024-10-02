/**
 * @param {Array} arr
 * @return {Generator}
 * TC - O(n)
 * SC - O(n)
 */
var inorderTraversal = function* (arr) {
  for (const item of arr.flat(10 ** 5)) {
    yield item;
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
