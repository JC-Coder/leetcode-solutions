var TimeLimitedCache = function () {
  this.data = {};
};

// const struct = {
//     "key": {
//         "value": "value",
//         "timeoutId": "timeout",
//         "isExp": true
//     }
// }

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let valExists = false;

  if (this.data[key]) {
    valExists = true;

    clearTimeout(this.data[key].timeoutId);
  }

  this.data[key] = {
    value,
    timeoutId: '',
    isExp: false
  };

  const intId = setTimeout(() => {
    this.data[key].isExp = true;
  }, duration);
  this.data[key].timeoutId = intId;

  return valExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.data[key] && !this.data[key].isExp) {
    return this.data[key].value;
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (const key of Object.keys(this.data)) {
    if (!this.data[key].isExp) {
      count++;
    }
  }

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
