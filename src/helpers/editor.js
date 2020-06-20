import { select } from '@wordpress/data';
import { create } from 'nano-css';

/**
 * @returns {object} settings
 */
export const getEditorSettings = () => select('core/editor').getEditorSettings();

/**
 * @returns {boolean} is valid custom colors
 */
export const isValidCustomColors = () => !getEditorSettings().disableCustomColors;

/**
 * @returns {boolean} is valid custom font sizes
 */
export const isValidCustomFontSizes = () => !getEditorSettings().disableCustomFontSizes;

/**
 * @returns {{name:string, color: *}[]} get colors
 */
export const getColors = () => getEditorSettings().colors;

/**
 * @returns {{name:string, size:*, slug:string}[]} get font sizes
 */
export const getFontSizes = () => getEditorSettings().fontSizes;

/**
 * @param {string} selector selector
 * @param {object} css css
 */
export const applyStyles = (selector, css) => {
  const nano    = create();
  const { put } = nano;

  put(selector, css);
};
