import './store';
import * as Components from './components';
import * as Helpers from './helpers';

Helpers.applyStyles('.components-dropdown-button__popover .components-font-size-picker__controls .components-custom-select-control__menu', {
  position: 'fixed',
  minWidth: '150px',
});
Helpers.applyStyles('.components-dropdown-button__popover .components-font-size-picker__controls .components-custom-select-control__item', {
  cursor: 'pointer',
  width: '100%',
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
Helpers.applyStyles('.utils--components-font-size-picker-wrapper .components-range-control__number', {
  pointerEvents: 'none',
  backgroundColor: '#ececec',
});
Helpers.applyStyles('.utils--components-toolbar__control.components-toolbar__control.components-button', {
  padding: '3px',
  outline: 'none',
});
Helpers.applyStyles('.utils--components-toolbar__control.components-toolbar__control.components-button>svg', {
  padding: '5px',
  borderRadius: '4px',
  height: '30px',
  width: '30px',
  boxSizing: 'border-box',
  outline: 'none',
  boxShadow: 'none',
});
Helpers.applyStyles('.components-dropdown-menu__indicator::after', {
  content: '""',
  pointerEvents: 'none',
  display: 'block',
  width: 0,
  height: 0,
  borderLeft: '3px solid transparent',
  borderRight: '3px solid transparent',
  borderTop: '5px solid',
  marginLeft: '4px',
  marginRight: '2px',
});
Helpers.applyStyles('.components-popover__content__dropdown-tooltip', {
  backgroundColor: 'white',
  color: 'black',
});

export {Components, Helpers};
