const { select } = wp.data;

const getEditorSettings = () => select( 'core/editor' ).getEditorSettings();

/**
 * @returns {boolean} is valid custom colors
 */
export const isValidCustomColors = () => ! getEditorSettings().disableCustomColors;

/**
 * @returns {boolean} is valid custom font sizes
 */
export const isValidCustomFontSizes = () => ! getEditorSettings().disableCustomFontSizes;

/**
 * @returns {{name:string, color: *}[]} get colors
 */
export const getColors = () => getEditorSettings().colors;

/**
 * @returns {{name:string, size:*, slug:string}[]} get font sizes
 */
export const getFontSizes = () => getEditorSettings().fontSizes;
