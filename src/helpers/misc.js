/**
 * @param {object} object object
 * @param {string} key key
 * @param {function|*} defaultValue default value
 * @returns {*} value
 */
export const getProperty = (object, key, defaultValue = undefined) => {
	const keys = key.split('.');
	for (const _key of keys) {
		if (_key in object) {
			object = object[ _key ];
		} else {
			if (typeof defaultValue === 'function') {
				return defaultValue();
			} else {
				return defaultValue;
			}
		}
	}
	return object;
};

/**
 * @param {object} object object
 * @param {string} key key
 * @param {*} value value
 * @returns {*} result
 */
export const setProperty = (object, key, value) => {
	const keys = Array.isArray(key) ? key : key.split('.');
	// eslint-disable-next-line no-magic-numbers
	if (keys.length > 1) {
		const _key = keys.shift();
		if (typeof object[ _key ] !== 'object') {
			object[ _key ] = {};
		}
		object[ _key ] = setProperty(object[ _key ], keys, value);
		return object;
	}

	object[ keys[ 0 ] ] = value;
	return object;
};

/**
 * @returns {boolean} is valid useRef?
 */
export const isValidUseRef = () => !!wp.element.useRef;

/**
 * @param {object} animate animate
 * @returns {boolean} is valid animation?
 */
export const isValidAnimation = (animate) => !!animate;

/**
 * @param {...{}} args args
 * @returns {string|null} animation usa class
 */
export const getAnimationUseClass = (...args) => isValidAnimation(args.length ? args[ 0 ] : wp.components.Animate) ? null : 'no-animation';
