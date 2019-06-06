import { Icon, DropdownButton } from './components';
import { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle, isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } from './utils';

wp.components.extension = wp.components.extension || {};
wp.components.extension.Icon = Icon;
wp.components.extension.DropdownButton = DropdownButton;

wp.richText.extension = wp.richText.extension || {};
wp.richText.extension.getActiveStyle = getActiveStyle;
wp.richText.extension.addActiveAttributes = addActiveAttributes;
wp.richText.extension.setActiveStyle = setActiveStyle;
wp.richText.extension.onChangeStyle = onChangeStyle;

wp.editor.extension = wp.editor.extension || {};
wp.editor.extension.isValidCustomColors = isValidCustomColors;
wp.editor.extension.isValidCustomFontSizes = isValidCustomFontSizes;
wp.editor.extension.getColors = getColors;
wp.editor.extension.getFontSizes = getFontSizes;
