require( 'should' );

const { registerFormatType } = wp.richText;

import { getActiveStyle } from '../../src/utils';

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
				isActive: true, value: {
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
				isActive: true, value: {
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
			}, 'test2/test6', 'font-size', 'px' ).should.equal( '16' );
		}
	} );
} );