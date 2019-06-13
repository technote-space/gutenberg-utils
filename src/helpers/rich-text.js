import classnames from 'classnames';
import { DropdownButton } from '../components';
import { getColors, getFontSizes, isValidCustomColors } from './index';

const { getActiveFormat, toggleFormat, applyFormat, removeFormat } = wp.richText;
const { ToolbarButton, BaseControl, ColorPalette, FontSizePicker, ColorIndicator } = wp.components;
const { getColorObjectByColorValue, ContrastChecker } = wp.editor;
const { Fragment } = wp.element;
const { sprintf, __ } = wp.i18n;

/**
 * @param {object} args args
 * @param {string} formatType format type
 * @param {string} styleName style name
 * @param {{suffix, defaultStyle, filter}} options options
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
	const filtered = value => typeof options.filter === 'function' ? options.filter( value ) : value;
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
 * @param {{title, className, tooltipClass}} optional optional
 * @returns {object} props
 */
export const getToolbarButtonProps = ( group, name, icon, optional = { tooltipClass: undefined } ) => {
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
 * @param {string} property property
 * @param {{createDisabled, createInspectorDisabled, dropdownClassName}} optional optional
 * @param {function} createControl create control function
 * @returns {object} props
 */
export const getDropdownButtonProps = ( group, name, title, icon, property, optional, createControl ) => {
	const props = {
		name,
		inspectorGroup: group,
		attributes: {
			style: '',
		},
		propertyName: property,
		useInspectorSetting: true,
	};
	if ( ! optional.createDisabled ) {
		props.create = ( { args, formatName } ) => <DropdownButton
			icon={ icon }
			label={ title }
			className={ classnames( `components-dropdown-button__has-property-${ property }`, optional.dropdownClassName ) }
			renderContent={ () => createControl( args, formatName, false ) }
		/>;
	}
	if ( ! optional.createInspectorDisabled ) {
		props.createInspector = ( { args, formatName } ) => createControl( args, formatName, true );
	}
	delete optional.createDisabled;
	delete optional.createInspectorDisabled;
	return Object.assign( {}, props, optional );
};

/**
 * @param {string} name name
 * @param {string} title title
 * @param {*} icon icon
 * @param {string} property property
 * @param {{group: boolean, createDisabled: function, createInspectorDisabled: function, dropdownClassName: string}} optional optional
 * @returns {object} props
 */
export const getColorButtonProps = ( name, title, icon, property, optional = {} ) => {
	const group = optional.group || 'inspector';
	delete optional.group;
	return getDropdownButtonProps( group, name, title, icon, property, optional, ( args, formatName, isInspector ) => {
		const value = getActiveStyle( args, formatName, property );
		const colors = getColors();
		const createColorPalette = ( args, formatName ) => <ColorPalette
			colors={ colors }
			disableCustomColors={ ! isValidCustomColors() }
			value={ value }
			onChange={ onChangeStyle( args, formatName, property ) }
		/>;
		return isInspector ? <BaseControl label={ getInspectorLabel( value, title, colors ) }>
			{ createColorPalette( args, formatName ) }
		</BaseControl> : createColorPalette( args, formatName );
	} );
};

const getInspectorLabel = ( value, label, colors ) => {
	if ( ! value ) {
		return label;
	}

	const colorObject = getColorObjectByColorValue( colors, value );
	const colorName = colorObject && colorObject.name;

	return <Fragment>
		{ label }
		<ColorIndicator
			colorValue={ value }
			aria-label={ sprintf( __( '(%s: %s)' ), label.toLowerCase(), colorName || value ) }
		/>
	</Fragment>;
};

/**
 * @param {string} name name
 * @param {string} title title
 * @param {*} icon icon
 * @param {{group: boolean, createDisabled: function, createInspectorDisabled: function, dropdownClassName: string}} optional optional
 * @returns {object} props
 */
export const getFontSizesButtonProps = ( name, title, icon, optional = {} ) => {
	const property = 'font-size';
	const group = optional.group || 'inspector';
	delete optional.group;
	return getDropdownButtonProps( group, name, title, icon, property, optional, ( args, formatName ) => {
		const value = getActiveStyle( args, formatName, property, { suffix: 'px', filter: Number } );
		return <FontSizePicker
			fontSizes={ getFontSizes() }
			value={ value }
			fallbackFontSize={ value }
			onChange={ onChangeStyle( args, formatName, property, 'px' ) }
		/>;
	} );
};

/**
 * @param {array} fills fills
 * @param {object} args args
 * @returns {null|*} contrast checker
 */
export const getContrastChecker = ( fills, args ) => {
	if ( ! fills || ! fills.length ) {
		return null;
	}

	const mapped = Object.assign( ...fills.filter( ( [ { props } ] ) => 'propertyName' in props && 'formatName' in props ).map( ( [ { props } ] ) => ( { [ props.propertyName ]: props } ) ) );
	if ( ! ( 'color' in mapped && 'background-color' in mapped && 'font-size' in mapped ) ) {
		return null;
	}

	const textColor = getActiveStyle( args, mapped[ 'color' ].formatName, 'color' );
	const backgroundColor = getActiveStyle( args, mapped[ 'background-color' ].formatName, 'background-color' );
	const fontSize = getActiveStyle( args, mapped[ 'font-size' ].formatName, 'font-size', { suffix: 'px', filter: Number, defaultStyle: 16 } );
	if ( ! textColor || ! backgroundColor ) {
		return null;
	}

	return <ContrastChecker
		backgroundColor={ backgroundColor }
		textColor={ textColor }
		fontSize={ fontSize }
	/>;
};

/**
 * @param {object} args args
 * @returns {function} remove format function
 */
export const getRemoveFormatFunction = ( args ) => () => args.onChange( {
	text: args.value.text,
	start: args.value.start,
	end: args.value.end,
	formats: new Array( args.value.formats.length ),
} );
