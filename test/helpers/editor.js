/* eslint-disable no-magic-numbers */
require( 'should' );

const { dispatch } = wp.data;

import { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } from '../../src/helpers';

describe( 'isValidCustomColors test', () => {
	it( 'should false', () => {
		dispatch( 'core/editor' ).updateEditorSettings( { disableCustomColors: true, disableCustomFontSizes: true } );

		isValidCustomColors().should.false();
		isValidCustomFontSizes().should.false();
	} );

	it( 'should true', () => {
		dispatch( 'core/editor' ).updateEditorSettings( { disableCustomColors: false, disableCustomFontSizes: false } );

		isValidCustomColors().should.true();
		isValidCustomFontSizes().should.true();
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
		colors.should.have.length( 3 );
		colors[ 0 ].name.should.equal( 'test1' );
		colors[ 0 ].color.should.equal( '#111' );
		colors[ 1 ].name.should.equal( 'test2' );
		colors[ 1 ].color.should.equal( '#222' );
		colors[ 2 ].name.should.equal( 'test3' );
		colors[ 2 ].color.should.equal( '#333' );
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
		fontSizes.should.have.length( 3 );
		fontSizes[ 0 ].name.should.equal( 'test1' );
		fontSizes[ 0 ].size.should.equal( '10px' );
		fontSizes[ 0 ].slug.should.equal( 'test1' );
		fontSizes[ 1 ].name.should.equal( 'test2' );
		fontSizes[ 1 ].size.should.equal( '20px' );
		fontSizes[ 1 ].slug.should.equal( 'test2' );
		fontSizes[ 2 ].name.should.equal( 'test3' );
		fontSizes[ 2 ].size.should.equal( '30px' );
		fontSizes[ 2 ].slug.should.equal( 'test3' );
	} );
} );