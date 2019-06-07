/* eslint-disable no-magic-numbers */
require( 'should' );

import { getTranslator } from '../../src/helpers';

describe( 'translate test', () => {
	it( 'should translate', () => {
		const translate = getTranslator( { translate: { 'test1': '11111' } } );
		translate.should.type( 'function' );
		translate( 'test1' ).should.equal( '11111' );
		translate( 'test2' ).should.equal( 'test2' );
	} );
} );
