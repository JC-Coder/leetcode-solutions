/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 * tc - 0(1)
 * sc - O(1)
 */
var cancellable = function (fn, args, t) {
  let funcRes = [];
  const to = setTimeout(() => {
    funcRes = fn(...args);
  }, t);

  const cancelFn = () => {
    clearTimeout(to);
    return funcRes;
  };

  return cancelFn;
};
