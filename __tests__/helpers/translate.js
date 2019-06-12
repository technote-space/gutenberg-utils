/* eslint-disable no-magic-numbers */
import { getTranslator } from '../../src/helpers';

describe( 'translate', () => {
	it( 'should translate', () => {
		const translate = getTranslator( { translate: { 'test1': '11111' } } );
		expect( typeof translate ).toBe( 'function' );
		expect( translate( 'test1' ) ).toBe( '11111' );
		expect( translate( 'test2' ) ).toBe( 'test2' );
	} );
} );
