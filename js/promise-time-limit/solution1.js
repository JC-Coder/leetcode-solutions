/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 * TC - O(1)
 * SC - O(1)
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return await new Promise((resolve, reject) => {
      fn(...args)
        .then(resolve)
        .catch(reject);

      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
