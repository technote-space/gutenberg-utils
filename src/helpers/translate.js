import { parameterManager } from './params';

/**
 * @param {object} params params
 * @returns {function(*=): (undefined|*)} translate function
 */
export const getTranslator = params => text => parameterManager( params ).get( 'translate.' + text, text );
