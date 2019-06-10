import classnames from 'classnames';
import { DropdownButton } from '../components';
import { getColors, getFontSizes, isValidCustomColors } from './index';

const { getActiveFormat, toggleFormat, applyFormat, removeFormat } = wp.richText;
const { ToolbarButton, BaseControl, ColorPalette, FontSizePicker } = wp.components;

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

/**
 * @param {string} group group
 * @param {string} name name
 * @param {*} icon icon
 * @param {object} optional optional
 * @returns {object} props
 */
export const getToolbarButtonProps = ( group, name, icon, optional = {} ) => {
	const title = 'title' in optional ? optional.title : name;
	const className = 'className' in optional ? optional.className : name;
	return {
		name,
		group,
		create: ( { args, formatName } ) => <ToolbarButton
			icon={ icon }
			title={ <div className={ className }>{ title }</div> }
			onClick={ () => args.onChange( toggleFormat( args.value, { type: formatName } ) ) }
			isActive={ args.isActive }
			extraProps={ {
				label: name,
				tooltip: <div className={ classnames( 'components-popover__content__dropdown-tooltip', optional.tooltipClass ) }>
					<div className={ name }>{ title }</div>
				</div>,
			} }
		/>,
		...optional,
	};
};

/**
 * @param {string} group group
 * @param {string} name name
 * @param {string} title title
 * @param {*} icon icon
 * @param {object} optional optional
 * @param {function} createControl create control function
 * @returns {object} props
 */
export const getDropdownButtonProps = ( group, name, title, icon, optional, createControl ) => {
	return {
		name,
		inspectorGroup: group,
		create: ( { args, formatName } ) => <DropdownButton
			icon={ icon }
			label={ title }
			renderContent={ () => createControl( args, formatName, false ) }
		/>,
		createInspector: ( { args, formatName } ) => createControl( args, formatName, true ),
		attributes: {
			style: '',
		},
		...optional,
	};
};

/**
 * @param {string} group group
 * @param {string} name name
 * @param {string} title title
 * @param {*} icon icon
 * @param {string} property property
 * @param {object} optional optional
 * @returns {object} props
 */
export const getColorButtonProps = ( group, name, title, icon, property, optional = {} ) => {
	const createColorPalette = ( args, formatName ) => <ColorPalette
		colors={ getColors() }
		disableCustomColors={ ! isValidCustomColors() }
		value={ getActiveStyle( args, formatName, property ) }
		onChange={ onChangeStyle( args, formatName, property ) }
	/>;
	return getDropdownButtonProps( group, name, title, icon, optional, ( args, formatName, isInspector ) => isInspector ? <BaseControl label={ title }>
		{ createColorPalette( args, formatName ) }
	</BaseControl> : createColorPalette( args, formatName ) );
};

/**
 * @param {string} group group
 * @param {string} name name
 * @param {string} title title
 * @param {*} icon icon
 * @param {object} optional optional
 * @returns {object} props
 */
export const getFontSizesButtonProps = ( group, name, title, icon, optional = {} ) => {
	return getDropdownButtonProps( group, name, title, icon, optional, ( args, formatName ) => {
		const value = getActiveStyle( args, formatName, 'font-size', { suffix: 'px', filter: Number } );
		return <FontSizePicker
			fontSizes={ getFontSizes() }
			value={ value }
			fallbackFontSize={ value }
			onChange={ onChangeStyle( args, formatName, 'font-size', 'px' ) }
		/>;
	} );
};
