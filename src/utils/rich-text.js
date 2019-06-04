const { getActiveFormat } = wp.richText;

/**
 * @param {object} args args
 * @param {string} formatType format type
 * @param {string} styleName style name
 * @param {undefined|string} suffix suffix
 * @returns {string|boolean} active style
 */
export const getActiveStyle = ( args, formatType, styleName, suffix = undefined ) => {
	if ( ! args.isActive ) {
		return false;
	}

	const activeFormat = getActiveFormat( args.value, formatType );
	if ( ! activeFormat ) {
		return false;
	}

	const style = activeFormat.attributes.style;
	if ( ! style ) {
		return false;
	}

	const extracted = style.replace( new RegExp( `^${ styleName }:\\s*` ), '' );
	if ( suffix ) {
		return extracted.replace( new RegExp( `${ suffix }$` ), '' );
	}

	return extracted;
};
