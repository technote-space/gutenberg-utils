/* eslint-disable no-magic-numbers */
const should = require( 'should' );

const { registerFormatType } = wp.richText;

import { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } from '../../src/utils';

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
		getActiveStyle( { value }, '', '' ).should.false();
		getActiveStyle( { isActive: false, value }, '', '' ).should.false();
		getActiveStyle( { isActive: true, value }, 'test1/test3', '' ).should.false();

		registerFormatType( 'test1/test4', {
			title: 'test4',
			tagName: 'span',
			className: 'test4',
			edit: () => null,
		} );
		getActiveStyle( { isActive: true, value }, 'test1/test4', '' ).should.false();
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
			getActiveStyle( {
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
			}, 'test2/test5', 'color' ).should.equal( 'red' );
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
			getActiveStyle( {
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
			}, 'test2/test6', 'font-size', { suffix: 'px' } ).should.equal( '16' );
		}
	} );
} );

describe( 'addActiveAttributes test', () => {
	it( 'should add attributes', () => {
		const attributes = addActiveAttributes( { activeAttributes: { test1: 'test1', test2: 'test2' } }, 'test-add-key', 'test-add-value' );
		attributes.should.ownProperty( 'test1' );
		attributes.should.ownProperty( 'test2' );
		attributes.should.ownProperty( 'test-add-key' );
		attributes.test1.should.equal( 'test1' );
		attributes.test2.should.equal( 'test2' );
		attributes[ 'test-add-key' ].should.equal( 'test-add-value' );
	} );
} );

describe( 'setActiveStyle test', () => {
	it( 'should add style', () => {
		const attributes = setActiveStyle( { activeAttributes: { test1: 'test1', test2: 'test2' } }, 'color', 'red' );
		attributes.should.ownProperty( 'test1' );
		attributes.should.ownProperty( 'test2' );
		attributes.should.ownProperty( 'style' );
		attributes.test1.should.equal( 'test1' );
		attributes.test2.should.equal( 'test2' );
		attributes.style.should.equal( 'color: red' );
	} );
} );

describe( 'onChangeStyle test', () => {
	it( 'should get onChange function', () => {
		onChangeStyle( {}, 'test/test1', 'color' ).should.type( 'function' );
	} );

	it( 'should on change', () => {
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
			value.should.ownProperty( 'activeFormats' );
			value.activeFormats.should.have.length( 0 );
		} )( undefined );
		onChange( value => {
			value.should.ownProperty( 'activeFormats' );
			value.activeFormats.should.have.length( 1 );
			value.activeFormats[ 0 ].should.ownProperty( 'type' );
			value.activeFormats[ 0 ].should.ownProperty( 'attributes' );
			value.activeFormats[ 0 ].type.should.equal( 'test2/test5' );
		} )( 'blue' );
		should( onChange()( '' ) ).null();
	} );
} );
