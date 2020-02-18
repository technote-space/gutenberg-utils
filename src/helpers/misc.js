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
