/* eslint-disable no-magic-numbers */
import { isOldEditor, getEditorStoreKey, getEditor } from '../../src/helpers';
import { setupCompatibility } from '../../src/helpers/compatibility';

describe( 'isOldEditor', () => {
	it( 'should return true', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect( isOldEditor() ).toBeTruthy();
	} );

	it( 'should return false', () => {
		wp.blockEditor[ 'isOldEditor' ] = false;
		expect( isOldEditor() ).toBeFalsy();

		delete wp.blockEditor[ 'isOldEditor' ];
		expect( isOldEditor() ).toBeFalsy();
	} );
} );

describe( 'getEditorStoreKey', () => {
	it( 'should return editor key', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect( getEditorStoreKey() ).toBe( 'core/editor' );
	} );

	it( 'should return block editor key', () => {
		delete wp.blockEditor[ 'isOldEditor' ];
		expect( getEditorStoreKey() ).toBe( 'core/block-editor' );
	} );
} );

describe( 'getEditor', () => {
	it( 'should return editor', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect( getEditor() ).toBe( wp.editor );
	} );

	it( 'should return block editor', () => {
		delete wp.blockEditor[ 'isOldEditor' ];
		expect( getEditor() ).toBe( wp.blockEditor );
	} );
} );

describe( 'setupCompatibility', () => {
	const test = ( prepare ) => {
		const blockEditor = wp.blockEditor;
		prepare();
		setupCompatibility();
		expect( typeof wp.blockEditor ).toBe( 'object' );
		expect( wp.blockEditor ).hasOwnProperty( 'isOldEditor' );
		expect( wp.blockEditor[ 'isOldEditor' ] ).toBeTruthy();
		wp.blockEditor = blockEditor;
	};
	it( 'should set editor', () => {
		test( () => {
			delete wp.blockEditor;
		} );
	} );

	it( 'should set editor', () => {
		test( () => {
			wp.blockEditor = Object.assign( {}, wp.blockEditor );
			delete wp.blockEditor.BlockEdit;
		} );
	} );
} );
