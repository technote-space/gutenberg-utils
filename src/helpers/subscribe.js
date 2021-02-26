const {subscribe} = wp.data;

/**
 * @param {function} selector selector
 * @param {function} listener listener
 * @param {any} initialize initialize value
 */
export const addSubscribe = (selector, listener, initialize = undefined) => {
  let previousValue = undefined === initialize ? selector(initialize) : initialize;
  subscribe(function() {
    const selectedValue = selector(previousValue);
    if (selectedValue !== previousValue) {
      previousValue = selectedValue;
      listener(selectedValue);
    }
  });
};
