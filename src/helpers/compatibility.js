/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/deprecated.js
 * @see https://github.com/WordPress/gutenberg/blob/release/5.9/packages/editor/src/store/selectors.js#L1161
 * @see https://github.com/WordPress/gutenberg/blob/release/5.9/packages/editor/src/store/actions.js#L759
 *
 * @example import { ColorPalette, InspectorControls } = getEditor();
 * @example wp.data.select( getEditorStoreKey() ).getSelectedBlock()
 */

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
