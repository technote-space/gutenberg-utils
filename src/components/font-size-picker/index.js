/**
 * Gutenberg v6.1
 **/
const { map } = window.lodash;
const { __, _x, sprintf } = wp.i18n;
const { Dashicon, Button, RangeControl, NavigableMenu } = wp.components;
import Dropdown from '../dropdown';
import BaseControl from '../base-control';
import './style.scss';


/**
 * @param {*} fallbackFontSize fallback font size
 * @param {Array} fontSizes font sizes
 * @param {boolean} disableCustomFontSizes disable custom font sizes
 * @param {function} onChange on change
 * @param {*} value value
 * @param {boolean} withSlider with slider
 * @return {null|Component} font size picker
 */
function FontSizePicker({
	fallbackFontSize,
	fontSizes = [],
	disableCustomFontSizes = false,
	onChange,
	value,
	withSlider = false,
}) {
	if (disableCustomFontSizes && !fontSizes.length) {
		return null;
	}
	const onChangeValue = (event) => {
		const newValue = event.target.value;
		if (newValue === '') {
			onChange(undefined);
			return;
		}
		onChange(Number(newValue));
	};

	const currentFont = fontSizes.find((font) => font.size === value);
	const currentFontSizeName = (currentFont && currentFont.name) || (!value && _x('Normal', 'font size name')) || _x('Custom', 'font size name');

	return (
		<BaseControl>
			<BaseControl.VisualLabel>
				{__('Font Size')}
			</BaseControl.VisualLabel>
			<div className="components-font-size-picker__buttons">
				{fontSizes.length &&
				<Dropdown
					className="components-font-size-picker__dropdown"
					contentClassName="components-font-size-picker__dropdown-content"
					position="bottom"
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							className="components-font-size-picker__selector"
							isLarge
							onClick={onToggle}
							aria-expanded={isOpen}
							aria-label={sprintf(
								/* translators: %s: font size name */
								__('Font size: %s'), currentFontSizeName,
							)}
						>
							{currentFontSizeName}
						</Button>
					)}
					renderContent={() => (
						<NavigableMenu>
							{map(fontSizes, ({ name, size, slug }) => {
								const isSelected = (value === size || (!value && slug === 'normal'));

								return (
									<Button
										key={slug}
										onClick={() => onChange(slug === 'normal' ? undefined : size)}
										className={`is-font-${slug}`}
										role="menuitemradio"
										aria-checked={isSelected}
									>
										{isSelected && <Dashicon icon="saved" />}
										<span className="components-font-size-picker__dropdown-text-size" style={{ fontSize: size }}>
											{name}
										</span>
									</Button>
								);
							})}
						</NavigableMenu>
					)}
				/>
				}
				{(!withSlider && !disableCustomFontSizes) &&
				<input
					className="components-range-control__number"
					type="number"
					onChange={onChangeValue}
					aria-label={__('Custom font size')}
					value={value || ''}
				/>
				}
				<Button
					className="components-color-palette__clear"
					type="button"
					disabled={value === undefined}
					onClick={() => onChange(undefined)}
					isSmall
					isDefault
				>
					{__('Reset')}
				</Button>
			</div>
			{withSlider &&
			<RangeControl
				className="components-font-size-picker__custom-input"
				label={__('Custom Size')}
				value={value || ''}
				initialPosition={fallbackFontSize}
				onChange={onChange}
				min={12}
				max={100}
				beforeIcon="editor-textcolor"
				afterIcon="editor-textcolor"
			/>
			}
		</BaseControl>
	);
}

export default FontSizePicker;
