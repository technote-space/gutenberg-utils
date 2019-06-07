/* eslint-disable no-magic-numbers */
const should = require( 'should' );

import { parameterManager } from '../../src/utils';

describe( 'parameterManager test', () => {
	it( 'should return default', () => {
		const manager = parameterManager();
		should( manager.get( 'test1', null ) ).null();
		manager.get( 'test2' ).should.equal( 'test2' );
		manager.get( 'test3', () => 3 ).should.equal( 3 );
	} );

	it( 'should get parameter', () => {
		const manager = parameterManager( { test1: 1, test2: { test3: 3 } } );
		manager.get( 'test1' ).should.equal( 1 );
		manager.get( 'test2' ).should.ownProperty( 'test3' );
		manager.get( 'test2' ).test3.should.equal( 3 );
		manager.get( 'test2.test3' ).should.equal( 3 );
	} );

	it( 'should set parameter', () => {
		const manager = parameterManager( { test1: 1, test2: { test3: 3 } } );
		manager.set( 'test1', 10 );
		manager.get( 'test1' ).should.equal( 10 );

		manager.set( 'test2.test3', 30 );
		manager.get( 'test2.test3' ).should.equal( 30 );

		manager.set( 'test4', 4 );
		manager.get( 'test4' ).should.equal( 4 );

		manager.set( 'test5.test6', 6 );
		manager.get( 'test5.test6' ).should.equal( 6 );
	} );
} );
