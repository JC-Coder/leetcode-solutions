/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 * tc - O(1)
 * sc - O(1)
 */
var debounce = function (fn, t) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
