/* eslint-disable no-magic-numbers */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FontSizePicker from '../../src/components/font-size-picker';
import Popover from '../../src/components/popover';

const { Button, SlotFillProvider } = wp.components;

describe('FontSizePicker with current value', () => {
	const fontSizes = [{ name: 'small', size: '10px', slug: 'small' }, { size: '16px', slug: 'normal' }, { size: '20px', slug: 'big' }];
	const currentSize = '16px';
	const onChange = jest.fn();
	const wrapper = mount(
		<SlotFillProvider>
			<FontSizePicker
				fontSizes={fontSizes}
				value={currentSize}
				onChange={onChange}
			/>
			<Popover.Slot />
		</SlotFillProvider>,
	);

	beforeEach(() => {
		onChange.mockClear();
	});

	it('should not render', () => {
		const wrapper = mount(<FontSizePicker disableCustomFontSizes={true} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render font size picker', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render select', () => {
		expect(wrapper.find('.components-font-size-picker__dropdown').find(Button)).toHaveLength(1);
	});

	it('should open font select', () => {
		expect(wrapper.find(Button)).toHaveLength(2);
		wrapper.find('.components-font-size-picker__dropdown').find(Button).simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.find(Button)).toHaveLength(2 + 3);
	});

	it('should call onChange when font clicked', () => {
		wrapper.find(Button).at(3).simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('20px');
	});

	it('should call onChange with undefined when the clearButton clicked', () => {
		const clearButton = wrapper.find('button.components-color-palette__clear');

		expect(clearButton).toHaveLength(1);

		clearButton.simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(undefined);
	});

	it('should call onChange with input value', () => {
		const input = wrapper.find('.components-range-control__number');

		expect(input).toHaveLength(1);

		input.simulate('change', { target: { value: 7 } });

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(7);
	});

	it('should call onChange with undefined', () => {
		const input = wrapper.find('.components-range-control__number');

		expect(input).toHaveLength(1);

		input.simulate('change', { target: { value: '' } });

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(undefined);
	});
});

describe('FontSizePicker with slider', () => {
	const fontSizes = [{ name: 'small', size: '10px', slug: 'small' }, { size: '16px', slug: 'normal' }, { size: '20px', slug: 'big' }];
	const currentSize = '16px';
	const wrapper = mount(
		<SlotFillProvider>
			<FontSizePicker
				fontSizes={fontSizes}
				value={currentSize}
				withSlider={true}
			/>
			<Popover.Slot />
		</SlotFillProvider>,
	);

	it('should render font size picker', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

describe('FontSizePicker without current value', () => {
	const fontSizes = [{ name: 'small', size: '10px', slug: 'small' }, { size: '16px', slug: 'normal' }, { size: '20px', slug: 'big' }];
	const currentSize = undefined;
	const onChange = jest.fn();
	const wrapper = mount(
		<SlotFillProvider>
			<FontSizePicker
				fontSizes={fontSizes}
				value={currentSize}
				onChange={onChange}
			/>
			<Popover.Slot />
		</SlotFillProvider>,
	);

	beforeEach(() => {
		onChange.mockClear();
	});

	it('should render font size picker', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should open font select', () => {
		expect(wrapper.find(Button)).toHaveLength(2);
		wrapper.find('.components-font-size-picker__dropdown').find(Button).simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.find(Button)).toHaveLength(2 + 3);
	});

	it('should call onChange when font clicked', () => {
		wrapper.find(Button).at(2).simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(undefined);
	});
});

describe('FontSizePicker with slider without current value', () => {
	const fontSizes = [{ name: 'small', size: '10px', slug: 'small' }, { size: '16px', slug: 'normal' }, { size: '20px', slug: 'big' }];
	const currentSize = undefined;
	const wrapper = mount(
		<SlotFillProvider>
			<FontSizePicker
				fontSizes={fontSizes}
				value={currentSize}
				withSlider={true}
			/>
			<Popover.Slot />
		</SlotFillProvider>,
	);

	it('should render font size picker', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
