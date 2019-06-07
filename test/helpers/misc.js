/* eslint-disable no-magic-numbers */
const should = require( 'should' );

import { getProperty, setProperty } from '../../src/helpers';

describe( 'getProperty test', () => {
	it( 'should return default', () => {
		should( getProperty( {}, 'test1' ) ).undefined();
		getProperty( {}, 'test2', 'test2-default' ).should.equal( 'test2-default' );
		getProperty( {}, 'test3', () => 3 ).should.equal( 3 );
	} );

	it( 'should get property', () => {
		getProperty( { test4: 4 }, 'test4' ).should.equal( 4 );
		getProperty( { test5: { test6: 6, test7: 7 } }, 'test5' ).should.ownProperty( 'test6' );
		getProperty( { test5: { test6: 6, test7: 7 } }, 'test5' ).should.ownProperty( 'test7' );
		getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test6' ).should.equal( 6 );
		getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test7' ).should.equal( 7 );
		getProperty( { test5: { test6: 6, test7: 7 } }, 'test5.test8', 8 ).should.equal( 8 );
	} );
} );

describe( 'setProperty test', () => {
	it( 'should set property', () => {
		setProperty( {}, 'test1', 1 ).should.ownProperty( 'test1' );
		setProperty( {}, 'test1', 1 ).test1.should.equal( 1 );
		setProperty( { test2: 2 }, 'test2', 20 ).test2.should.equal( 20 );
		setProperty( { test3: 3 }, 'test4', 4 ).should.ownProperty( 'test3' );
		setProperty( { test3: 3 }, 'test4', 4 ).should.ownProperty( 'test4' );
		setProperty( { test3: 3 }, 'test4', 4 ).test3.should.equal( 3 );
		setProperty( { test3: 3 }, 'test4', 4 ).test4.should.equal( 4 );
		setProperty( { test5: 5 }, 'test5.test6', 6 ).should.ownProperty( 'test5' );
		setProperty( { test5: 5 }, 'test5.test6', 6 ).test5.should.ownProperty( 'test6' );
		setProperty( { test5: 5 }, 'test5.test6', 6 ).test5.test6.should.equal( 6 );
		setProperty( {}, 'test7.test8', 8 ).should.ownProperty( 'test7' );
		setProperty( {}, 'test7.test8', 8 ).test7.should.ownProperty( 'test8' );
		setProperty( {}, 'test7.test8', 8 ).test7.test8.should.equal( 8 );
		setProperty( { test9: { test10: 10 } }, 'test9.test10', 100 ).test9.test10.should.equal( 100 );

		const object = {};
		setProperty( object, 'test', 123 );
		object.should.ownProperty( 'test' );
		object.test.should.equal( 123 );
	} );
} );
