/* eslint-disable no-magic-numbers */
import { getProperty, setProperty } from '../../src/helpers';

describe( 'getProperty', () => {
	it( 'should return default', () => {
		expect( getProperty( {}, 'test1' ) ).toBeUndefined();
		expect( getProperty( {}, 'test2', 'test2-default' ) ).toBe( 'test2-default' );
		expect( getProperty( {}, 'test3', () => 3 ) ).toBe( 3 );
	} );

	it( 'should get property', () => {
		expect( getProperty( { test4: 4 }, 'test4' ) ).toBe( 4 );
		expect( getProperty( { test5: { test6: 6, test7: 7 } }, 'test5' ) ).toHaveProperty( 'test6' );
		expect( getProperty( { test5: { test6: 6, test7: 7 } }, 'test5' ) ).toHaveProperty( 'test7' );
		expect( getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test6' ) ).toBe( 6 );
		expect( getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test7' ) ).toBe( 7 );
		expect( getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test8', 8 ) ).toBe( 8 );
	} );
} );

describe( 'setProperty', () => {
	it( 'should set property', () => {
		expect( setProperty( {}, 'test1', 1 ) ).toHaveProperty( 'test1' );
		expect( setProperty( {}, 'test1', 1 ).test1 ).toBe( 1 );
		expect( setProperty( { test2: 2 }, 'test2', 20 ).test2 ).toBe( 20 );
		expect( setProperty( { test3: 3 }, 'test4', 4 ) ).toHaveProperty( 'test3' );
		expect( setProperty( { test3: 3 }, 'test4', 4 ) ).toHaveProperty( 'test4' );
		expect( setProperty( { test3: 3 }, 'test4', 4 ).test3 ).toBe( 3 );
		expect( setProperty( { test3: 3 }, 'test4', 4 ).test4 ).toBe( 4 );
		expect( setProperty( { test5: 5 }, 'test5.test6', 6 ) ).toHaveProperty( 'test5' );
		expect( setProperty( { test5: 5 }, 'test5.test6', 6 ).test5 ).toHaveProperty( 'test6' );
		expect( setProperty( { test5: 5 }, 'test5.test6', 6 ).test5.test6 ).toBe( 6 );
		expect( setProperty( {}, 'test7.test8', 8 ) ).toHaveProperty( 'test7' );
		expect( setProperty( {}, 'test7.test8', 8 ).test7 ).toHaveProperty( 'test8' );
		expect( setProperty( {}, 'test7.test8', 8 ).test7.test8 ).toBe( 8 );
		expect( setProperty( { test9: { test10: 10 } }, 'test9.test10', 100 ).test9.test10 ).toBe( 100 );

		const object = {};
		setProperty( object, 'test', 123 );
		expect( object ).toHaveProperty( 'test' );
		expect( object.test ).toBe( 123 );
	} );
} );
