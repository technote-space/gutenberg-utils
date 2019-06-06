import classnames from 'classnames';

import './style.scss';

const { IconButton } = wp.components;
import Dropdown from './dropdown';

/**
 * @param {*} icon icon
 * @param {string|*} label label
 * @param {string|*} tooltip tooltip
 * @param {string} className class name
 * @param {string} position position
 * @param {string} contentClassName content class name
 * @param {function} renderContent render content
 * @param {boolean} isActive is active?
 * @param {boolean} isDisabled is disabled?
 * @param {boolean} isDropdownDisabled is dropdown disabled?
 * @returns {*} dropdown button
 * @constructor
 */
const DropdownButton = ( {
	icon = 'menu',
	label,
	tooltip = label,
	className,
	position = 'top right',
	contentClassName,
	renderContent,
	isActive = false,
	isDisabled = false,
	isDropdownDisabled = false,
} ) => {
	return <Dropdown
		className={ classnames( 'components-dropdown-button', className ) }
		contentClassName={ classnames( 'components-dropdown-button__popover', contentClassName ) }
		position={ position }
		renderToggle={ ( { isOpen, onToggle } ) => {
			if ( isOpen && isDropdownDisabled ) {
				onToggle();
			}
			return <IconButton
				className={ classnames( 'components-dropdown-button__toggle', {
					'is-active': isActive,
				} ) }
				icon={ icon }
				onClick={ onToggle }
				aria-haspopup="true"
				aria-expanded={ isOpen }
				aria-pressed={ isActive }
				label={ label }
				tooltip={ tooltip }
				disabled={ isDisabled }
			>
				<span className="components-dropdown-button__indicator"/>
			</IconButton>;
		} }
		renderContent={ renderContent }
	/>;
};

export default DropdownButton;
