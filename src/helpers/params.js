/**
 * @param {object} params params
 * @returns {function(*=, *=): *} value
 */
const get = params => (key, defaultValue = key) => window.lodash.has(params, key) ? window.lodash.get(params, key) : (typeof defaultValue === 'function' ? defaultValue() : defaultValue);

/**
 * @param {object} params params
 * @returns {function(*=, *=)} result
 */
const set = params => (key, value) => window.lodash.set(params, key, value);

/**
 * @param {object} params params
 * @returns {{set: (function(*=, *=)), get: (function(*=, *=): *)}} manager
 */
export const parameterManager = (params = {}) => {
  return {
    get: get(params),
    set: set(params),
  };
};
