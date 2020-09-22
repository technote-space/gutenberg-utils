import {INC_INDEX} from './constant';

/**
 * @param {string} name name
 * @returns {{type: string}} action
 */
export const increment = name => ({
  type: INC_INDEX,
  name,
});
