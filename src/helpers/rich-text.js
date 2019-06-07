const { getActiveFormat, applyFormat, removeFormat } = wp.richText;

/**
 * @param {object} args args
 * @param {string} formatType format type
 * @param {string} styleName style name
 * @param {{suffix, defaultStyle}} options options
 * @returns {string|boolean} active style
 */
export const getActiveStyle = ( args, formatType, styleName, options = { suffix: undefined, defaultStyle: false, filter: undefined } ) => {
	if ( ! args.isActive ) {
		return options.defaultStyle;
	}

	const activeFormat = getActiveFormat( args.value, formatType );
	if ( ! activeFormat || ! activeFormat.attributes ) {
		return options.defaultStyle;
	}

	const style = activeFormat.attributes.style || ( activeFormat.unregisteredAttributes && activeFormat.unregisteredAttributes.style );
	if ( ! style ) {
		return options.defaultStyle;
	}

	const extracted = style.replace( new RegExp( `^${ styleName }:\\s*` ), '' );
	const filtered = value => options.filter ? options.filter( value ) : value;
	if ( options.suffix ) {
		return filtered( extracted.replace( new RegExp( `${ options.suffix }$` ), '' ) );
	}

	return filtered( extracted );
};

/**
 * @param {{}} args args
 * @param {string} key key
 * @param {*} value value
 * @returns {{}} active attributes
 */
export const addActiveAttributes = ( args, key, value ) => {
	const attributes = args.activeAttributes || {};
	attributes[ key ] = value;
	return attributes;
};

/**
 * @param {{}} args args
 * @param {string} styleName style name
 * @param {string|number} value value
 * @returns {{}} active attributes
 */
export const setActiveStyle = ( args, styleName, value ) => addActiveAttributes( args, 'style', `${ styleName }: ${ value }` );

/**
 * @param {{}} args args
 * @param {string} formatName format name
 * @param {string} styleName style name
 * @param {string} suffix suffix
 * @returns {function(*=): null} on change function
 */
export const onChangeStyle = ( args, formatName, styleName, suffix = '' ) => value => undefined === value ?
	args.onChange( removeFormat( args.value, formatName ) ) :
	(
		value ? args.onChange( applyFormat( args.value, {
			type: formatName,
			attributes: setActiveStyle( args, styleName, value + suffix ),
		} ) ) : null
	);