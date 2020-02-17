/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/deprecated.js
 * @see https://github.com/WordPress/gutenberg/blob/release/5.9/packages/editor/src/store/selectors.js#L1161
 * @see https://github.com/WordPress/gutenberg/blob/release/5.9/packages/editor/src/store/actions.js#L759
 *
 * @example import { ColorPalette, InspectorControls } = getEditor();
 * @example wp.data.select( getEditorStoreKey() ).getSelectedBlock()
 */

import { compare } from 'compare-versions';

const { select } = wp.data;
const { get, has } = window.lodash;

/**
 * @returns {object} settings
 */
export const getEditorSettings = () => select('core/editor').getEditorSettings();

/**
 * @returns {object} package versions
 */
export const getPackageVersions = () => {
	const settings = getEditorSettings();
	if (Object.prototype.hasOwnProperty.call(settings, 'package-versions')) {
		return settings[ 'package-versions' ];
	}

	return {};
};

/**
 * @returns {boolean} is valid?
 */
export const isValidPackageVersions = () => !!Object.keys(getPackageVersions()).length;

/**
 * @param {string} name name
 * @returns {boolean} is available?
 */
export const isPackageAvailable = name => isValidPackageVersions() && has(getPackageVersions(), name);

/**
 * @param {string} name name
 * @returns {string|false} version
 */
export const getPackageVersion = name => get(getPackageVersions(), name, false);

/**
 * @param {string} name name
 * @param {string} version version
 * @param {string} operation operation [>, <, =, >=, <=]
 * @param {boolean} fallback fallback
 * @returns {boolean} result
 */
export const comparePackageVersion = (name, version, operation, fallback = false) => isPackageAvailable(name) ? compare(getPackageVersion(name), version, operation) : fallback;

/**
 * setup compatibility
 */
export const setupCompatibility = () => {
	if (!wp.blockEditor || !wp.blockEditor.BlockEdit) {
		wp.blockEditor = wp.editor;
		wp.blockEditor[ 'isOldEditor' ] = true;
	}
};

setupCompatibility();

/**
 * @returns {boolean} is old editor?
 */
export const isOldEditor = () => 'isOldEditor' in wp.blockEditor && wp.blockEditor.isOldEditor;

/**
 * @returns {string} editor store key
 */
export const getEditorStoreKey = () => isOldEditor() ? 'core/editor' : 'core/block-editor';

/**
 * @returns {object} editor
 */
export const getEditor = () => isOldEditor() ? wp.editor : wp.blockEditor;
