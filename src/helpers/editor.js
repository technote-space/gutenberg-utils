import {select} from '@wordpress/data';
import {create} from 'nano-css';
import {get} from 'lodash';

/**
 * @returns {object} settings
 */
export const getEditorSettings = () => select('core/block-editor').getSettings();

const getFeature = (featurePath, getter) => {
  const settings = getEditorSettings();
  const value    = getter(settings);
  if (value !== undefined) {
    return value;
  }

  const globalPath = `__experimentalFeatures.global.${featurePath}`;
  return get(settings, globalPath);
};

/**
 * @returns {boolean} is valid custom colors
 */
export const isValidCustomColors = () => getFeature('color.custom', settings => settings.disableCustomColors === undefined ? undefined : !settings.disableCustomColors);

/**
 * @returns {boolean} is valid custom font sizes
 */
export const isValidCustomFontSizes = () => getFeature('typography.customFontSize', settings => settings.disableCustomFontSizes === undefined ? undefined : !settings.disableCustomFontSizes);

/**
 * @returns {{name:string, color: *}[]} get colors
 */
export const getColors = () => getFeature('color.palette', settings => settings.colors);

/**
 * @returns {{name:string, size:*, slug:string}[]} get font sizes
 */
export const getFontSizes = () => getFeature('typography.fontSizes', settings => settings.fontSizes);

/**
 * @param {string} selector selector
 * @param {object} css css
 */
export const applyStyles = (selector, css) => {
  const nano  = create();
  const {put} = nano;

  put(selector, css);
};
