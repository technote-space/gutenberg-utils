/* eslint-disable no-magic-numbers */
const { dispatch } = wp.data;

import { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } from '../../src/helpers';

describe( 'isValidCustomColors test', () => {
	it( 'should false', () => {
		dispatch( 'core/editor' ).updateEditorSettings( { disableCustomColors: true, disableCustomFontSizes: true } );

		expect( isValidCustomColors() ).toBe( false );
		expect( isValidCustomFontSizes() ).toBe( false );
	} );

	it( 'should true', () => {
		dispatch( 'core/editor' ).updateEditorSettings( { disableCustomColors: false, disableCustomFontSizes: false } );

		expect( isValidCustomColors() ).toBe( true );
		expect( isValidCustomFontSizes() ).toBe( true );
	} );

	it( 'should get colors', () => {
		dispatch( 'core/editor' ).updateEditorSettings( {
			colors: [
				{ name: 'test1', color: '#111' },
				{ name: 'test2', color: '#222' },
				{ name: 'test3', color: '#333' },
			],
		} );

		const colors = getColors();
		expect( colors ).toHaveLength( 3 );
		expect( colors[ 0 ].name ).toBe( 'test1' );
		expect( colors[ 0 ].color ).toBe( '#111' );
		expect( colors[ 1 ].name ).toBe( 'test2' );
		expect( colors[ 1 ].color ).toBe( '#222' );
		expect( colors[ 2 ].name ).toBe( 'test3' );
		expect( colors[ 2 ].color ).toBe( '#333' );
	} );

	it( 'should get font sizes', () => {
		dispatch( 'core/editor' ).updateEditorSettings( {
			fontSizes: [
				{ name: 'test1', size: '10px', slug: 'test1' },
				{ name: 'test2', size: '20px', slug: 'test2' },
				{ name: 'test3', size: '30px', slug: 'test3' },
			],
		} );

		const fontSizes = getFontSizes();
		expect( fontSizes ).toHaveLength( 3 );
		expect( fontSizes[ 0 ].name ).toBe( 'test1' );
		expect( fontSizes[ 0 ].size ).toBe( '10px' );
		expect( fontSizes[ 0 ].slug ).toBe( 'test1' );
		expect( fontSizes[ 1 ].name ).toBe( 'test2' );
		expect( fontSizes[ 1 ].size ).toBe( '20px' );
		expect( fontSizes[ 1 ].slug ).toBe( 'test2' );
		expect( fontSizes[ 2 ].name ).toBe( 'test3' );
		expect( fontSizes[ 2 ].size ).toBe( '30px' );
		expect( fontSizes[ 2 ].slug ).toBe( 'test3' );
	} );
} );