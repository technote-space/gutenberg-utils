import classnames from 'classnames';
import './style.scss';

const { map } = window.lodash;
const { __, sprintf } = wp.i18n;
const { Button, Tooltip, ColorPicker, Dashicon } = wp.components;
import Dropdown from '../dropdown';

/**
 * @param {Array} colors colors
 * @param {boolean} disableCustomColors disable custom colors?
 * @param {string} value value
 * @param {function} onChange on change function
 * @param {string} className class name
 * @param {boolean} clearable clearable?
 * @returns {*} color palette
 * @constructor
 */
export default function ColorPalette({
	colors,
	disableCustomColors = false,
	value,
	onChange,
	className,
	clearable = true,
}) {
	/**
	 * @param {string} color color
	 * @returns {function(): *} function
	 */
	function applyOrUnset(color) {
		return () => onChange(value === color ? undefined : color);
	}

	const customColorPickerLabel = __('Custom color picker');
	const classes = classnames('components-color-palette', className);
	return (
		<div className={classes}>
			{map(colors, ({ color, name }) => {
				const style = { color };
				const itemClasses = classnames('components-color-palette__item', { 'is-active': value === color });

				return (
					<div key={color} className="components-color-palette__item-wrapper">
						<Tooltip
							text={name || sprintf(__('Color code: %s'), color)}>
							<button
								type="button"
								className={itemClasses}
								style={style}
								onClick={applyOrUnset(color)}
								aria-label={name ?
									sprintf(__('Color: %s'), name) :
									sprintf(__('Color code: %s'), color)}
								aria-pressed={value === color}
							/>
						</Tooltip>
						{value === color && <Dashicon icon="saved" />}
					</div>
				);
			})}

			<div className="components-color-palette__custom-clear-wrapper">
				{!disableCustomColors &&
				<Dropdown
					className="components-color-palette__custom-color"
					contentClassName="components-color-palette__picker"
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							aria-expanded={isOpen}
							onClick={onToggle}
							aria-label={customColorPickerLabel}
							isLink
						>
							{__('Custom Color')}
						</Button>
					)}
					renderContent={() => (
						<ColorPicker
							color={value}
							onChangeComplete={(color) => onChange(color.hex)}
							disableAlpha
						/>
					)}
				/>
				}
				{!!clearable && (
					<Button
						className="components-color-palette__clear"
						type="button"
						onClick={() => onChange(undefined)}
						isSmall
						isDefault
					>
						{__('Clear')}
					</Button>
				)}
			</div>
		</div>
	);
}
