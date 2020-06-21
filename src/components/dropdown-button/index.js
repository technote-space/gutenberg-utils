import React from 'react';
import classnames from 'classnames';
import {Dropdown, IconButton} from '@wordpress/components';

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
 * @param {boolean} isHiddenIndicator is hidden indicator?
 * @returns {*} dropdown button
 * @constructor
 */
const DropdownButton = ({
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
  isHiddenIndicator = false,
}) => {
  return <Dropdown
    className={classnames('components-dropdown-toggle', className)}
    contentClassName={classnames('components-dropdown-button__popover', contentClassName)}
    position={position}
    renderToggle={({isOpen, onToggle, onClose}) => {
      if (isOpen && isDropdownDisabled) {
        // eslint-disable-next-line no-magic-numbers
        setTimeout(onClose, 0);
      }

      return <IconButton
        className={classnames('components-dropdown-button__toggle', 'components-toolbar__control', 'utils--components-toolbar__control', {
          'is-active is-pressed': isActive,
        })}
        icon={icon}
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-pressed={isActive}
        label={label}
        tooltip={tooltip}
        disabled={isDisabled}
      >
        {!isHiddenIndicator && <span className="components-dropdown-menu__indicator"/>}
      </IconButton>;
    }}
    renderContent={renderContent}
  />;
};

export default DropdownButton;
