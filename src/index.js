import * as Components from './components';
import * as Helpers from './helpers';

Helpers.applyStyles('.components-dropdown-button__popover .components-font-size-picker__controls .components-custom-select-control__menu', {
	position: 'fixed',
	minWidth: '150px',
});
Helpers.applyStyles('.components-dropdown-button__popover .components-popover__content', {
	padding: '12px',
});

export { Components, Helpers };
