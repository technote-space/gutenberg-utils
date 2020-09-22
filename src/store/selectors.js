/**
 * @param {object} state state
 * @param {string} name name
 * @returns {number} state
 */
// eslint-disable-next-line no-magic-numbers
export const getIndex = (state, name) => name in state.index ? state.index[name] : -1;
