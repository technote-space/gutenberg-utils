/* eslint-disable no-magic-numbers */
import { parameterManager } from '../../src/helpers';

describe( 'parameterManager', () => {
	it( 'should return default', () => {
		const manager = parameterManager();
		expect( manager.get( 'test1', null ) ).toBeNull();
		expect( manager.get( 'test2' ) ).toBe( 'test2' );
		expect( manager.get( 'test3', () => 3 ) ).toBe( 3 );
	} );

	it( 'should get parameter', () => {
		const manager = parameterManager( { test1: 1, test2: { test3: 3 } } );
		expect( manager.get( 'test1' ) ).toBe( 1 );
		expect( manager.get( 'test2' ) ).toHaveProperty( 'test3' );
		expect( manager.get( 'test2' ).test3 ).toBe( 3 );
		expect( manager.get( 'test2.test3' ) ).toBe( 3 );
	} );

	it( 'should set parameter', () => {
		const manager = parameterManager( { test1: 1, test2: { test3: 3 } } );
		manager.set( 'test1', 10 );
		expect( manager.get( 'test1' ) ).toBe( 10 );

		manager.set( 'test2.test3', 30 );
		expect( manager.get( 'test2.test3' ) ).toBe( 30 );

		manager.set( 'test4', 4 );
		expect( manager.get( 'test4' ) ).toBe( 4 );

		manager.set( 'test5.test6', 6 );
		expect( manager.get( 'test5.test6' ) ).toBe( 6 );
	} );
} );
