/* eslint-disable no-magic-numbers */
import { isOldEditor, getEditorStoreKey, getEditor } from '../../src/helpers';

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
