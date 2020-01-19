import { getProperty, setProperty } from './misc';

/**
 * @param {object} params params
 * @returns {function(*=, *=): *} value
 */
const get = params => ( key, defaultValue = key ) => getProperty( params, key, defaultValue );

/**
 * @param {object} params params
 * @returns {function(*=, *=)} result
 */
const set = params => ( key, value ) => setProperty( params, key, value );

/**
 * @param {object} params params
 * @returns {{set: (function(*=, *=)), get: (function(*=, *=): *)}} manager
 */
export const parameterManager = ( params = {} ) => {
	return {
		get: get( params ),
		set: set( params ),
	};
};
