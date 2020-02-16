/* eslint-disable no-magic-numbers */
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColorPalette from '../../src/components/color-palette';

const { KeyboardShortcuts } = wp.components;

describe('ColorPalette', () => {
	const colors = [{ name: 'red', color: '#f00' }, { name: 'white', color: '#fff' }, { color: '#00f' }];
	const currentColor = '#f00';
	const onChange = jest.fn();
	const wrapper = shallow(<ColorPalette colors={colors} value={currentColor} onChange={onChange} />);
	const buttons = wrapper.find('.components-color-palette__item-wrapper button');

	beforeEach(() => {
		onChange.mockClear();
	});

	test('should render a dynamic toolbar of colors', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('should render three color button options', () => {
		expect(buttons).toHaveLength(3);
	});

	test('should call onClick on an active button with undefined', () => {
		const activeButton = buttons.findWhere((button) => button.hasClass('is-active'));
		activeButton.simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(undefined);
	});

	test('should call onClick on an inactive button', () => {
		const inactiveButton = buttons.findWhere((button) => !button.hasClass('is-active')).first();
		inactiveButton.simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
	});

	test('should call onClick with undefined, when the clearButton onClick is triggered', () => {
		const clearButton = wrapper.find('.components-color-palette__clear');

		expect(clearButton).toHaveLength(1);

		clearButton.simulate('click');

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(undefined);
	});

	test('should allow disabling custom color picker', () => {
		expect(toJson(shallow(<ColorPalette colors={colors} disableCustomColors={true} value={currentColor} onChange={onChange} />))).toMatchSnapshot();
	});

	describe('Dropdown', () => {
		const dropdown = wrapper.find('Dropdown');

		test('should render it correctly', () => {
			expect(toJson(dropdown)).toMatchSnapshot();
		});

		describe('.renderToggle', () => {
			const isOpen = true;
			const onToggle = jest.fn();

			const renderedToggleButton = shallow(dropdown.props().renderToggle({ isOpen, onToggle }));

			test('should render dropdown content', () => {
				expect(toJson(wrapper)).toMatchSnapshot();
			});

			test('should call onToggle on click.', () => {
				renderedToggleButton.simulate('click');

				expect(onToggle).toHaveBeenCalledTimes(1);
			});
		});

		describe('.renderContent', () => {
			const renderedContent = mount(dropdown.props().renderContent());

			test('should render dropdown content', () => {
				expect(toJson(renderedContent, { mode: 'deep' })).toMatchSnapshot();
			});

			test('should call onChange with color', () => {
				const pointer = renderedContent.find('.components-color-picker__saturation').find(KeyboardShortcuts);

				expect(pointer).toHaveLength(1);

				pointer.props().shortcuts.right();

				expect(onChange).toHaveBeenCalledTimes(1);
				expect(onChange).toHaveBeenCalledWith('#ff0000');
			});
		});
	});
});
