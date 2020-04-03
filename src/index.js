import * as Components from './components';
import * as Helpers from './helpers';

Helpers.applyStyles('.components-dropdown-button__popover .components-font-size-picker__controls .components-custom-select-control__menu', {
	position: 'fixed',
	minWidth: '150px',
});
Helpers.applyStyles('.components-dropdown-button__popover .components-popover__content', {
	padding: '12px',
});
Helpers.applyStyles('.components-dropdown-button__has-property-color .dashicon', {
	color: '#d94f4f',
});
Helpers.applyStyles('.components-dropdown-button__has-property-background-color .dashicon', {
	backgroundColor: '#f0b849',
});
Helpers.applyStyles('.components-dropdown-toggle>.components-toolbar__control.components-button', {
	width: 'auto',
});
Helpers.applyStyles('.components-dropdown-toggle>.components-toolbar__control.components-button.has-icon.has-text>svg', {
	margin: 0,
});

export { Components, Helpers };
