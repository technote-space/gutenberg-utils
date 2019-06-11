/* eslint-disable no-magic-numbers */
const { registerFormatType } = wp.richText;

import { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } from '../../src/helpers';
import { getToolbarButtonProps, getColorButtonProps, getFontSizesButtonProps } from '../../src/helpers';

describe( 'getActiveStyle test', () => {
	it( 'should false', () => {
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
		expect( getActiveStyle( { value }, '', '' ) ).toBe( false );
		expect( getActiveStyle( { isActive: false, value }, '', '' ) ).toBe( false );
		expect( getActiveStyle( { isActive: true, value }, 'test1/test3', '' ) ).toBe( false );

		registerFormatType( 'test1/test4', {
			title: 'test4',
			tagName: 'span',
			className: 'test4',
			edit: () => null,
		} );
		expect( getActiveStyle( { isActive: true, value }, 'test1/test4', '' ) ).toBe( false );
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
				isActive: true,
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
			}, 'test2/test6', 'font-size', { suffix: 'px' } ) ).toBe( '16' );
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

describe( 'addActiveAttributes test', () => {
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

describe( 'setActiveStyle test', () => {
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

describe( 'onChangeStyle test', () => {
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

const getArgs = ( onChange, formatName ) => ( {
	args: {
		isActive: true,
		value: {
			start: 0,
			end: 1,
			text: 'test5',
			formats: [ [], [], [], [], [] ],
		},
		onChange: onChange( formatName ),
	},
	formatName: formatName,
} );

describe( 'getToolbarButtonProps test', () => {
	it( 'should get props', () => {
		const props = getToolbarButtonProps( 'test1-group', 'test1-name', 'test1-icon', {
			'test1-option1': 1,
			'test1-option2': 'test2',
			'title': 'test1-title',
			'className': 'test1-class',
		} );
		expect( props ).toHaveProperty( 'name' );
		expect( props ).toHaveProperty( 'group' );
		expect( props ).toHaveProperty( 'create' );
		expect( props ).toHaveProperty( 'test1-option1' );
		expect( props ).toHaveProperty( 'test1-option2' );
		expect( props.name ).toBe( 'test1-name' );
		expect( props.group ).toBe( 'test1-group' );
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
		expect( typeof button.props.onClick ).toBe( 'function' );
		expect( button.props.isActive ).toBe( true );
		expect( button.props.extraProps ).toHaveProperty( 'label' );
		expect( button.props.extraProps ).toHaveProperty( 'tooltip' );
		expect( button.props.extraProps.label ).toBe( 'test1-name' );
		button.props.onClick();

		expect( getToolbarButtonProps( 'test2-group', 'test2-name', 'test2-icon' ) ).not.toHaveProperty( 'test1-option1' );
	} );
} );

describe( 'getColorButtonProps test', () => {
	it( 'should get props', () => {
		const props = getColorButtonProps( 'test1-group', 'test1-name', 'test1-title', 'test1-icon', 'test1-property', { 'test1-option1': 1, 'test1-option2': 'test2' } );
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
		expect( button.props ).toHaveProperty( 'renderContent' );
		expect( button.props.icon ).toBe( 'test1-icon' );
		expect( button.props.label ).toBe( 'test1-title' );
		expect( typeof button.props.renderContent ).toBe( 'function' );

		const control = button.props.renderContent();
		expect( control ).toHaveProperty( 'props' );
		expect( control.props ).toHaveProperty( 'colors' );
		expect( control.props ).toHaveProperty( 'disableCustomColors' );
		expect( control.props ).toHaveProperty( 'value' );
		expect( control.props ).toHaveProperty( 'onChange' );

		const inspector = props.createInspector( getArgs( () => () => null, 'test2/test5' ) );
		expect( inspector ).toHaveProperty( 'props' );
		expect( inspector.props ).toHaveProperty( 'label' );
		expect( inspector.props ).toHaveProperty( 'children' );

		expect( typeof getColorButtonProps( 'test2-group', 'test2-name', 'test2-title', 'test2-icon', 'test1-property' ) ).not.toHaveProperty( 'test1-option1' );
		expect( getColorButtonProps( 'test3-group', 'test3-name', 'test3-title', 'test3-icon', 'test3-property', { createDisabled: true } ) ).not.toHaveProperty( 'create' );
		expect( getColorButtonProps( 'test4-group', 'test4-name', 'test4-title', 'test4-icon', 'test4-property', { createInspectorDisabled: true } ) ).not.toHaveProperty( 'createInspector' );
	} );
} );

describe( 'getFontSizesButtonProps test', () => {
	it( 'should get props', () => {
		const props = getFontSizesButtonProps( 'test1-group', 'test1-name', 'test1-title', 'test1-icon', { 'test1-option1': 1, 'test1-option2': 'test2' } );
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
		expect( button.props ).toHaveProperty( 'renderContent' );
		expect( button.props.icon ).toBe( 'test1-icon' );
		expect( button.props.label ).toBe( 'test1-title' );
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

		expect( getFontSizesButtonProps( 'test2-group', 'test2-name', 'test2-title', 'test2-icon' ) ).not.toHaveProperty( 'test1-option1' );
		expect( getFontSizesButtonProps( 'test3-group', 'test3-name', 'test3-title', 'test3-icon', { createDisabled: true } ) ).not.toHaveProperty( 'create' );
		expect( getFontSizesButtonProps( 'test4-group', 'test4-name', 'test4-title', 'test4-icon', { createInspectorDisabled: true } ) ).not.toHaveProperty( 'createInspector' );
	} );
} );
