/**
 * @param {Function} fn
 * @return {Object}
 * TC - O(n)
 * SC - O(n)
 */
Array.prototype.groupBy = function (fn) {
  const groupped = {};

  for (const item of this) {
    const id = fn(item);
    if (!groupped[id]) {
      groupped[id] = [item];
    } else {
      groupped[id].push(item);
    }
  }

  return groupped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
