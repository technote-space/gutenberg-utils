/* eslint-disable no-magic-numbers */
const { registerFormatType } = wp.richText;

import { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } from '../../src/helpers';
import { getToolbarButtonProps, getColorButtonProps, getFontSizesButtonProps, getContrastChecker } from '../../src/helpers';
import { getRemoveFormatFunction } from '../../src/helpers';

describe( 'getActiveStyle', () => {
	it( 'should undefined', () => {
		const value = {
			start: 0,
			end: 1,
			text: 't',
			formats: [
				[
					{
						attributes: {},
						type: 'test1/test4',
						unregisteredAttributes: {},
					},
				],
			],
		};
		expect( getActiveStyle( { value }, '', '' ) ).toBeUndefined();
		expect( getActiveStyle( { isActive: false, value }, '', '' ) ).toBeUndefined();
		expect( getActiveStyle( { isActive: true, value }, 'test1/test3', '' ) ).toBeUndefined();

		registerFormatType( 'test1/test4', {
			title: 'test4',
			tagName: 'span',
			className: 'test4',
			edit: () => null,
		} );
		expect( getActiveStyle( { isActive: true, value }, 'test1/test4', '' ) ).toBeUndefined();
	} );

	it( 'should return style', () => {
		{
			registerFormatType( 'test2/test5', {
				title: 'test5',
				tagName: 'span',
				className: 'test5',
				edit: () => null,
			} );
			const format = {
				attributes: { style: 'color: red' },
				type: 'test2/test5',
				unregisteredAttributes: {},
			};
			expect( getActiveStyle( {
				isActive: true,
				value: {
					start: 0,
					end: 1,
					text: 'test5',
					formats: [
						[ format ],
						[ format ],
						[ format ],
						[ format ],
						[ format ],
					],
				},
			}, 'test2/test5', 'color' ) ).toBe( 'red' );
		}

		{
			registerFormatType( 'test2/test6', {
				title: 'test6',
				tagName: 'span',
				className: 'test6',
				edit: () => null,
			} );
			const format = {
				attributes: { style: 'font-size: 16px' },
				type: 'test2/test6',
				unregisteredAttributes: {},
			};
			expect( getActiveStyle( {
				isActive: false,
				value: {
					start: 0,
					end: 1,
					text: 'test6',
					formats: [
						[ format ],
						[ format ],
						[ format ],
						[ format ],
						[ format ],
					],
				},
			}, 'test2/test6', 'font-size', { suffix: 'px', ignoreActive: true } ) ).toBe( '16' );
		}

		{
			registerFormatType( 'test2/test7', {
				title: 'test7',
				tagName: 'span',
				className: 'test7',
				edit: () => null,
			} );
			const format = {
				attributes: { style: 'font-size: 16px' },
				type: 'test2/test7',
				unregisteredAttributes: {},
			};
			expect( getActiveStyle( {
				isActive: true,
				value: {
					start: 0,
					end: 1,
					text: 'test7',
					formats: [
						[ format ],
						[ format ],
						[ format ],
						[ format ],
						[ format ],
					],
				},
			}, 'test2/test7', 'font-size', { suffix: 'px', filter: Number } ) ).toBe( 16 );
		}
	} );
} );

describe( 'addActiveAttributes', () => {
	it( 'should add attributes', () => {
		const attributes = addActiveAttributes( { activeAttributes: { test1: 'test1', test2: 'test2' } }, 'test-add-key', 'test-add-value' );
		expect( attributes ).toHaveProperty( 'test1' );
		expect( attributes ).toHaveProperty( 'test2' );
		expect( attributes ).toHaveProperty( 'test-add-key' );
		expect( attributes.test1 ).toBe( 'test1' );
		expect( attributes.test2 ).toBe( 'test2' );
		expect( attributes[ 'test-add-key' ] ).toBe( 'test-add-value' );
	} );
} );

describe( 'setActiveStyle', () => {
	it( 'should add style', () => {
		const attributes = setActiveStyle( { activeAttributes: { test1: 'test1', test2: 'test2' } }, 'color', 'red' );
		expect( attributes ).toHaveProperty( 'test1' );
		expect( attributes ).toHaveProperty( 'test2' );
		expect( attributes ).toHaveProperty( 'style' );
		expect( attributes.test1 ).toBe( 'test1' );
		expect( attributes.test2 ).toBe( 'test2' );
		expect( attributes.style ).toBe( 'color: red' );
	} );
} );

describe( 'onChangeStyle', () => {
	it( 'should get onChange function', () => {
		expect( typeof onChangeStyle( {}, 'test/test1', 'color' ) ).toBe( 'function' );
	} );

	it( 'should on change', () => {
		{
			const format = {
				attributes: { style: 'color: red' },
				type: 'test2/test5',
				unregisteredAttributes: {},
			};
			const onChange = onChange => onChangeStyle( {
				isActive: true,
				value: {
					start: 0,
					end: 1,
					text: 'test5',
					formats: [
						[ format ],
						[ format ],
						[ format ],
						[ format ],
						[ format ],
					],
				},
				onChange: onChange,
			}, 'test2/test5', 'color' );
			onChange( value => {
				expect( value ).toHaveProperty( 'activeFormats' );
				expect( value.activeFormats ).toHaveLength( 0 );
			} )( undefined );
			onChange( value => {
				expect( value ).toHaveProperty( 'activeFormats' );
				expect( value.activeFormats ).toHaveLength( 1 );
				expect( value.activeFormats[ 0 ] ).toHaveProperty( 'type' );
				expect( value.activeFormats[ 0 ] ).toHaveProperty( 'attributes' );
				expect( value.activeFormats[ 0 ].type ).toBe( 'test2/test5' );
				expect( value.activeFormats[ 0 ].attributes ).toHaveProperty( 'style' );
				expect( value.activeFormats[ 0 ].attributes.style ).toBe( 'color: blue' );
			} )( 'blue' );
			expect( onChange()( '' ) ).toBeNull();
		}

		{
			const format = {
				attributes: { style: 'font-size: 16px' },
				type: 'test2/test7',
				unregisteredAttributes: {},
			};
			const onChange = onChange => onChangeStyle( {
				isActive: true,
				value: {
					start: 0,
					end: 1,
					text: 'test7',
					formats: [
						[ format ],
						[ format ],
						[ format ],
						[ format ],
						[ format ],
					],
				},
				onChange: onChange,
			}, 'test2/test7', 'font-size', 'px' );
			onChange( value => {
				expect( value ).toHaveProperty( 'activeFormats' );
				expect( value.activeFormats ).toHaveLength( 0 );
			} )( undefined );
			onChange( value => {
				expect( value ).toHaveProperty( 'activeFormats' );
				expect( value.activeFormats ).toHaveLength( 1 );
				expect( value.activeFormats[ 0 ] ).toHaveProperty( 'type' );
				expect( value.activeFormats[ 0 ] ).toHaveProperty( 'attributes' );
				expect( value.activeFormats[ 0 ].type ).toBe( 'test2/test7' );
				expect( value.activeFormats[ 0 ].attributes ).toHaveProperty( 'style' );
				expect( value.activeFormats[ 0 ].attributes.style ).toBe( 'font-size: 32px' );
			} )( '32' );
			expect( onChange()( '' ) ).toBeNull();
		}
	} );
} );

const getArgs = ( onChange, formatName, format = [] ) => ( {
	args: {
		isActive: true,
		value: {
			start: 0,
			end: 1,
			text: 'test5',
			formats: [ format, format, format, format, format ],
		},
		onChange: onChange( formatName ),
	},
	formatName: formatName,
} );

describe( 'getToolbarButtonProps', () => {
	it( 'should get props', () => {
		const props = getToolbarButtonProps( 'test1-group', 'test1-name', 'test1-icon', {
			'test1-option1': 1,
			'test1-option2': 'test2',
			title: 'test1-title',
			className: 'test1-class',
			tooltipClass: 'tooltip-class',
		} );
		expect( props ).toHaveProperty( 'name' );
		expect( props ).toHaveProperty( 'group' );
		expect( props ).toHaveProperty( 'create' );
		expect( props ).toHaveProperty( 'test1-option1' );
		expect( props ).toHaveProperty( 'test1-option2' );
		expect( props.name ).toBe( 'test1-name' );
		expect( props.group ).toBe( 'test1-group' );
		expect( typeof props.create ).toBe( 'function' );
		expect( props[ 'test1-option1' ] ).toBe( 1 );
		expect( props[ 'test1-option2' ] ).toBe( 'test2' );

		const button = props.create( getArgs( formatName => value => {
			expect( value ).toHaveProperty( 'start' );
			expect( value ).toHaveProperty( 'end' );
			expect( value ).toHaveProperty( 'text' );
			expect( value ).toHaveProperty( 'formats' );
			expect( value ).toHaveProperty( 'activeFormats' );
			expect( value.text ).toBe( 'test5' );
			expect( value.formats[ 0 ][ 0 ].type ).toBe( formatName );
			expect( value.activeFormats[ 0 ].type ).toBe( formatName );
		}, 'test2/test5' ) );
		expect( button ).toHaveProperty( 'props' );
		expect( button.props ).toHaveProperty( 'icon' );
		expect( button.props ).toHaveProperty( 'title' );
		expect( button.props ).toHaveProperty( 'onClick' );
		expect( button.props ).toHaveProperty( 'isActive' );
		expect( button.props ).toHaveProperty( 'extraProps' );
		expect( button.props.icon ).toBe( 'test1-icon' );
		expect( typeof button.props.title ).toBe( 'object' );
		expect( button.props.title.props ).toHaveProperty( 'children' );
		expect( button.props.title.props.className ).toBe( 'test1-class' );
		expect( button.props.title.props.children ).toBe( 'test1-name' );
		expect( typeof button.props.onClick ).toBe( 'function' );
		expect( button.props.isActive ).toBe( true );
		expect( button.props.extraProps ).toHaveProperty( 'label' );
		expect( button.props.extraProps ).toHaveProperty( 'tooltip' );
		expect( button.props.extraProps.tooltip.props.className ).toBe( 'components-popover__content__dropdown-tooltip tooltip-class' );
		expect( button.props.extraProps.label ).toBe( 'test1-name' );
		button.props.onClick();

		const props2 = getToolbarButtonProps( 'test2-group', 'test2-name', 'test2-icon', {
			createDisabled: true,
		} );
		expect( props2 ).not.toHaveProperty( 'test1-option1' );
		expect( props2 ).toHaveProperty( 'create' );
		expect( props2.create ).toBeNull();

		const props3 = getToolbarButtonProps( 'test3-group', 'test3-name', 'test3-icon' );
		expect( props3 ).toHaveProperty( 'create' );
		expect( typeof props3.create ).toBe( 'function' );

		const props4 = getToolbarButtonProps( 'test4-group', 'test4-name', 'test4-icon', {
			preview: 'test4-preview',
		} );
		const button2 = props4.create( getArgs( () => {
		}, 'test2/test5' ) );
		expect( typeof button2.props.title ).toBe( 'object' );
		expect( button2.props.title.props ).toHaveProperty( 'children' );
		expect( button2.props.title.props.className ).toBe( 'test4-name' );
		expect( button2.props.title.props.children ).toBe( 'test4-preview' );

		const props5 = getToolbarButtonProps( 'test5-group', 'test5-name', 'test5-icon', {
			tagName: 'test5-tag',
			className: 'test5-class',
		} );
		const button3 = props5.create( getArgs( () => {
		}, 'test2/test5' ) );
		expect( typeof button3.props.title ).toBe( 'object' );
		expect( button3.props.title.props ).toHaveProperty( 'children' );
		expect( button3.props.title.props.className ).toBe( 'test5-class' );
		expect( typeof button3.props.title.props.children ).toBe( 'object' );
		expect( button3.props.title.props.children.type ).toBe( 'test5-tag' );
		expect( button3.props.title.props.children.props ).toHaveProperty( 'className' );
		expect( button3.props.title.props.children.props ).toHaveProperty( 'children' );
		expect( button3.props.title.props.children.props.className ).toBe( 'test5-class' );
		expect( button3.props.title.props.children.props.children ).toBe( 'test5-name' );
	} );
} );

describe( 'getColorButtonProps', () => {
	it( 'should get props', () => {
		const props = getColorButtonProps( 'test1-name', 'test1-title', 'test1-icon', 'test1-property', { group: 'test1-group', 'test1-option1': 1, 'test1-option2': 'test2' } );
		expect( props ).toHaveProperty( 'name' );
		expect( props ).toHaveProperty( 'inspectorGroup' );
		expect( props ).toHaveProperty( 'create' );
		expect( props ).toHaveProperty( 'createInspector' );
		expect( props ).toHaveProperty( 'attributes' );
		expect( props ).toHaveProperty( 'test1-option1' );
		expect( props ).toHaveProperty( 'test1-option2' );
		expect( props.name ).toBe( 'test1-name' );
		expect( props.inspectorGroup ).toBe( 'test1-group' );
		expect( props.attributes ).toHaveProperty( 'style' );
		expect( props[ 'test1-option1' ] ).toBe( 1 );
		expect( props[ 'test1-option2' ] ).toBe( 'test2' );

		const button = props.create( getArgs( () => () => null, 'test2/test5' ) );
		expect( button ).toHaveProperty( 'props' );
		expect( button.props ).toHaveProperty( 'icon' );
		expect( button.props ).toHaveProperty( 'label' );
		expect( button.props ).toHaveProperty( 'className' );
		expect( button.props ).toHaveProperty( 'renderContent' );
		expect( button.props.icon ).toBe( 'test1-icon' );
		expect( button.props.label ).toBe( 'test1-title' );
		expect( button.props.className ).toBe( 'components-dropdown-button__has-property-test1-property' );
		expect( typeof button.props.renderContent ).toBe( 'function' );

		const control = button.props.renderContent();
		expect( control ).toHaveProperty( 'props' );
		expect( control.props ).toHaveProperty( 'colors' );
		expect( control.props ).toHaveProperty( 'disableCustomColors' );
		expect( control.props ).toHaveProperty( 'value' );
		expect( control.props ).toHaveProperty( 'onChange' );

		const inspector1 = props.createInspector( getArgs( () => () => null, 'test2/test5' ) );
		expect( inspector1 ).toHaveProperty( 'props' );
		expect( inspector1.props ).toHaveProperty( 'label' );
		expect( inspector1.props ).toHaveProperty( 'children' );
		expect( inspector1.props.label ).toBe( 'test1-title' );

		wpMock.blockEditor.getColorObjectByColorValue = () => false;
		const inspector2 = props.createInspector( getArgs( () => () => null, 'test2/test5', [
			{
				attributes: { style: 'color: red' },
				type: 'test2/test5',
				unregisteredAttributes: {},
			},
		] ) );
		expect( inspector2 ).toHaveProperty( 'props' );
		expect( inspector2.props ).toHaveProperty( 'label' );
		expect( inspector2.props ).toHaveProperty( 'children' );
		expect( inspector2.props.label ).toHaveProperty( 'props' );
		expect( inspector2.props.label.props.children[ 1 ].props ).toHaveProperty( 'aria-label' );
		expect( inspector2.props.label.props.children[ 1 ].props[ 'aria-label' ] ).toBe( '(test1-title: color: red)' );

		wpMock.blockEditor.getColorObjectByColorValue = () => ( { name: false } );
		const inspector3 = props.createInspector( getArgs( () => () => null, 'test2/test5', [
			{
				attributes: { style: 'color: blue' },
				type: 'test2/test5',
				unregisteredAttributes: {},
			},
		] ) );
		expect( inspector3.props.label.props.children[ 1 ].props ).toHaveProperty( 'aria-label' );
		expect( inspector3.props.label.props.children[ 1 ].props[ 'aria-label' ] ).toBe( '(test1-title: color: blue)' );

		wpMock.blockEditor.getColorObjectByColorValue = () => ( { name: 'test-name' } );
		const inspector4 = props.createInspector( getArgs( () => () => null, 'test2/test5', [
			{
				attributes: { style: 'color: red' },
				type: 'test2/test5',
				unregisteredAttributes: {},
			},
		] ) );
		expect( inspector4.props.label.props.children[ 1 ].props ).toHaveProperty( 'aria-label' );
		expect( inspector4.props.label.props.children[ 1 ].props[ 'aria-label' ] ).toBe( '(test1-title: test-name)' );

		expect( typeof getColorButtonProps( 'test2-name', 'test2-title', 'test2-icon', 'test1-property' ) ).not.toHaveProperty( 'test1-option1' );
		expect( getColorButtonProps( 'test3-name', 'test3-title', 'test3-icon', 'test3-property', { createDisabled: true } ) ).not.toHaveProperty( 'create' );
		expect( getColorButtonProps( 'test4-name', 'test4-title', 'test4-icon', 'test4-property', { createInspectorDisabled: true } ) ).not.toHaveProperty( 'createInspector' );
	} );
} );

describe( 'getFontSizesButtonProps', () => {
	it( 'should get props', () => {
		const props = getFontSizesButtonProps( 'test1-name', 'test1-title', 'test1-icon', { group: 'test1-group', 'test1-option1': 1, 'test1-option2': 'test2' } );
		expect( props ).toHaveProperty( 'name' );
		expect( props ).toHaveProperty( 'inspectorGroup' );
		expect( props ).toHaveProperty( 'create' );
		expect( props ).toHaveProperty( 'createInspector' );
		expect( props ).toHaveProperty( 'attributes' );
		expect( props ).toHaveProperty( 'test1-option1' );
		expect( props ).toHaveProperty( 'test1-option2' );
		expect( props.name ).toBe( 'test1-name' );
		expect( props.inspectorGroup ).toBe( 'test1-group' );
		expect( props.attributes ).toHaveProperty( 'style' );
		expect( props[ 'test1-option1' ] ).toBe( 1 );
		expect( props[ 'test1-option2' ] ).toBe( 'test2' );

		const button = props.create( getArgs( () => () => null, 'test2/test5' ) );
		expect( button ).toHaveProperty( 'props' );
		expect( button.props ).toHaveProperty( 'icon' );
		expect( button.props ).toHaveProperty( 'label' );
		expect( button.props ).toHaveProperty( 'className' );
		expect( button.props ).toHaveProperty( 'renderContent' );
		expect( button.props.icon ).toBe( 'test1-icon' );
		expect( button.props.label ).toBe( 'test1-title' );
		expect( button.props.className ).toBe( 'components-dropdown-button__has-property-font-size' );
		expect( typeof button.props.renderContent ).toBe( 'function' );

		const control = button.props.renderContent();
		expect( control ).toHaveProperty( 'props' );
		expect( control.props ).toHaveProperty( 'fontSizes' );
		expect( control.props ).toHaveProperty( 'value' );
		expect( control.props ).toHaveProperty( 'fallbackFontSize' );
		expect( control.props ).toHaveProperty( 'onChange' );

		const inspector = props.createInspector( getArgs( () => () => null, 'test2/test5' ) );
		expect( inspector ).toHaveProperty( 'props' );
		expect( control.props ).toHaveProperty( 'fontSizes' );
		expect( control.props ).toHaveProperty( 'value' );
		expect( control.props ).toHaveProperty( 'fallbackFontSize' );
		expect( control.props ).toHaveProperty( 'onChange' );

		expect( getFontSizesButtonProps( 'test2-name', 'test2-title', 'test2-icon' ) ).not.toHaveProperty( 'test1-option1' );
		expect( getFontSizesButtonProps( 'test3-name', 'test3-title', 'test3-icon', { createDisabled: true } ) ).not.toHaveProperty( 'create' );
		expect( getFontSizesButtonProps( 'test4-name', 'test4-title', 'test4-icon', { createInspectorDisabled: true } ) ).not.toHaveProperty( 'createInspector' );
	} );
} );

describe( 'getContrastChecker', () => {
	const createFill = ( propertyName, formatName ) => ( [ { props: { propertyName: propertyName, formatName: formatName } } ] );

	it( 'should return null', () => {
		expect( getContrastChecker( [], {} ) ).toBeNull();
		expect( getContrastChecker( [
			[ { props: { propertyName: 'color' } } ],
			[ { props: { formatName: 'test/font-size' } } ],
		], {} ) ).toBeNull();
		expect( getContrastChecker( [
			createFill( 'color', 'test/font-color' ),
			createFill( 'font-size', 'test/font-size' ),
		], {} ) ).toBeNull();
	} );

	it( 'should return null', () => {
		const formats = [
			{
				attributes: { style: 'color: red' },
				type: 'test/font-color',
				unregisteredAttributes: {},
			},
			{
				attributes: { style: 'font-size: 16px' },
				type: 'test/font-size',
				unregisteredAttributes: {},
			},
		];
		expect( getContrastChecker( [
			createFill( 'color', 'test/font-color' ),
			createFill( 'background-color', 'test/background-color' ),
			createFill( 'font-size', 'test/font-size' ),
		], {
			isActive: true,
			value: {
				start: 0,
				end: 1,
				text: 'test',
				formats: [
					formats,
					formats,
					formats,
					formats,
				],
			},
		} ) ).toBeNull();
	} );

	it( 'should return ContrastChecker', () => {
		const formats = [
			{
				attributes: { style: 'color: red' },
				type: 'test/font-color',
				unregisteredAttributes: {},
			},
			{
				attributes: { style: 'background-color: blue' },
				type: 'test/background-color',
				unregisteredAttributes: {},
			},
			{
				attributes: { style: 'font-size: 20px' },
				type: 'test/font-size',
				unregisteredAttributes: {},
			},
		];
		const checker = getContrastChecker( [
			createFill( 'color', 'test/font-color' ),
			createFill( 'background-color', 'test/background-color' ),
			createFill( 'font-size', 'test/font-size' ),
		], {
			isActive: true,
			value: {
				start: 0,
				end: 1,
				text: 'test',
				formats: [
					formats,
					formats,
					formats,
					formats,
				],
			},
		} );
		expect( checker ).toHaveProperty( 'props' );
		expect( checker.props ).toHaveProperty( 'children' );
		expect( checker.props.children ).toHaveProperty( 'props' );
		expect( checker.props.children.props ).toHaveProperty( 'textColor' );
		expect( checker.props.children.props ).toHaveProperty( 'backgroundColor' );
		expect( checker.props.children.props ).toHaveProperty( 'fontSize' );
		expect( checker.props.children.props.textColor ).toBe( 'red' );
		expect( checker.props.children.props.backgroundColor ).toBe( 'blue' );
		expect( checker.props.children.props.fontSize ).toBe( 20 );
	} );

	it( 'should return ContrastChecker', () => {
		const formats = [
			{
				attributes: { style: 'color: red' },
				type: 'test/font-color',
				unregisteredAttributes: {},
			},
			{
				attributes: { style: 'background-color: blue' },
				type: 'test/background-color',
				unregisteredAttributes: {},
			},
		];
		const checker = getContrastChecker( [
			createFill( 'color', 'test/font-color' ),
			createFill( 'background-color', 'test/background-color' ),
		], {
			isActive: true,
			value: {
				start: 0,
				end: 1,
				text: 'test',
				formats: [
					formats,
					formats,
					formats,
					formats,
				],
			},
		} );
		expect( checker ).toHaveProperty( 'props' );
		expect( checker.props ).toHaveProperty( 'children' );
		expect( checker.props.children ).toHaveProperty( 'props' );
		expect( checker.props.children.props ).toHaveProperty( 'textColor' );
		expect( checker.props.children.props ).toHaveProperty( 'backgroundColor' );
		expect( checker.props.children.props ).toHaveProperty( 'fontSize' );
		expect( checker.props.children.props.textColor ).toBe( 'red' );
		expect( checker.props.children.props.backgroundColor ).toBe( 'blue' );
		expect( checker.props.children.props.fontSize ).toBe( 16 );
	} );
} );

describe( 'getRemoveFormatFunction', () => {
	it( 'should get remove format function', () => {
		const onChange = jest.fn( ( value ) => {
			expect( typeof value ).toBe( 'object' );
			expect( value ).toHaveProperty( 'text' );
			expect( value ).toHaveProperty( 'start' );
			expect( value ).toHaveProperty( 'end' );
			expect( value ).toHaveProperty( 'formats' );
			expect( value.text ).toBe( args.value.text );
			expect( value.start ).toBe( args.value.start );
			expect( value.end ).toBe( args.value.end );
			expect( value.formats ).toHaveLength( args.value.formats.length );
		} );
		const formats = [
			{
				attributes: { style: 'color: red' },
				type: 'test/font-color',
				unregisteredAttributes: {},
			},
			{
				attributes: { style: 'background-color: blue' },
				type: 'test/background-color',
				unregisteredAttributes: {},
			},
		];
		const args = {
			isActive: true,
			value: {
				start: 0,
				end: 1,
				text: 'test',
				formats: [
					formats,
					formats,
					formats,
					formats,
				],
			},
			onChange: onChange,
		};

		const removeFormat = getRemoveFormatFunction( args );
		expect( typeof removeFormat ).toBe( 'function' );

		removeFormat();

		expect( onChange ).toBeCalled();
	} );
} );
