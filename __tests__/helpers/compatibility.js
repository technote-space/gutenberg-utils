/* eslint-disable no-magic-numbers */
import { isOldEditor, getEditorStoreKey, getEditor, isValidPackageVersions, isPackageAvailable, getPackageVersion, comparePackageVersion } from '../../src/helpers';
import { setupCompatibility, getPackageVersions } from '../../src/helpers/compatibility';

const { dispatch } = wp.data;

describe('isOldEditor', () => {
	it('should return true', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect(isOldEditor()).toBeTruthy();
	});

	it('should return false', () => {
		wp.blockEditor[ 'isOldEditor' ] = false;
		expect(isOldEditor()).toBeFalsy();

		delete wp.blockEditor[ 'isOldEditor' ];
		expect(isOldEditor()).toBeFalsy();
	});
});

describe('getEditorStoreKey', () => {
	it('should return editor key', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect(getEditorStoreKey()).toBe('core/editor');
	});

	it('should return block editor key', () => {
		delete wp.blockEditor[ 'isOldEditor' ];
		expect(getEditorStoreKey()).toBe('core/block-editor');
	});
});

describe('getEditor', () => {
	it('should return editor', () => {
		wp.blockEditor[ 'isOldEditor' ] = true;
		expect(getEditor()).toBe(wp.editor);
	});

	it('should return block editor', () => {
		delete wp.blockEditor[ 'isOldEditor' ];
		expect(getEditor()).toBe(wp.blockEditor);
	});
});

describe('setupCompatibility', () => {
	const test = (prepare) => {
		const blockEditor = wp.blockEditor;
		prepare();
		setupCompatibility();
		expect(typeof wp.blockEditor).toBe('object');
		expect(wp.blockEditor).toHaveProperty('isOldEditor');
		expect(wp.blockEditor[ 'isOldEditor' ]).toBeTruthy();
		wp.blockEditor = blockEditor;
	};
	it('should set editor', () => {
		test(() => {
			delete wp.blockEditor;
		});
	});

	it('should set editor', () => {
		test(() => {
			wp.blockEditor = Object.assign({}, wp.blockEditor);
			delete wp.blockEditor.BlockEdit;
		});
	});
});

describe('getPackageVersions', () => {
	afterAll(() => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});
	});

	it('should return empty', () => {
		expect(Object.keys(getPackageVersions()).length).toBe(0);
	});

	it('should get package versions', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		const versions = getPackageVersions();
		expect(versions).toHaveProperty('wp-editor');
		expect(versions).toHaveProperty('wp-components');
		expect(versions[ 'wp-editor' ]).toBe('7.0.0');
		expect(versions[ 'wp-components' ]).toBe('8.0.0');
	});
});

describe('isValidPackageVersions', () => {
	afterAll(() => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});
	});

	it('should return true', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		expect(isValidPackageVersions()).toBe(true);
	});

	it('should return false', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});

		expect(isValidPackageVersions()).toBe(false);
	});
});

describe('isPackageAvailable', () => {
	afterAll(() => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});
	});

	it('should return true', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		expect(isPackageAvailable('wp-components')).toBe(true);
	});

	it('should return false', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});

		expect(isPackageAvailable('wp-components')).toBe(false);
	});
});

describe('getPackageVersion', () => {
	afterAll(() => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});
	});

	it('should get package version', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		expect(getPackageVersion('wp-editor')).toBe('7.0.0');
		expect(getPackageVersion('wp-components')).toBe('8.0.0');
	});

	it('should return false', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});

		expect(getPackageVersion('wp-editor')).toBe(false);
		expect(getPackageVersion('wp-components')).toBe(false);
	});
});

describe('comparePackageVersion', () => {
	afterAll(() => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {},
		});
	});

	it('should return true', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		expect(comparePackageVersion('wp-components', '7.0.0', '>')).toBe(true);
		expect(comparePackageVersion('wp-components', '7.0.0', '>', false)).toBe(true);
		expect(comparePackageVersion('wp-components', '8.0.0', '>=')).toBe(true);
		expect(comparePackageVersion('wp-components', '8.0.0', '=')).toBe(true);
		expect(comparePackageVersion('wp-components', '8.0.0', '<=')).toBe(true);
		expect(comparePackageVersion('wp-components', '8.0.1', '<')).toBe(true);
		expect(comparePackageVersion('wp-test', '8.0.0', '=', true)).toBe(true);
	});

	it('should return false', () => {
		dispatch('core/editor').updateEditorSettings({
			'package-versions': {
				'wp-editor': '7.0.0',
				'wp-components': '8.0.0',
			},
		});

		expect(comparePackageVersion('wp-components', '7.0.0', '<')).toBe(false);
		expect(comparePackageVersion('wp-components', '7.0.0', '<', true)).toBe(false);
		expect(comparePackageVersion('wp-components', '8.0.1', '=')).toBe(false);
		expect(comparePackageVersion('wp-test', '8.0.0', '=')).toBe(false);
		expect(comparePackageVersion('wp-test', '8.0.0', '=', false)).toBe(false);
	});
});
