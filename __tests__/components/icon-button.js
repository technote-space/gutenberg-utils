/* eslint-disable no-magic-numbers */
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconButton from '../../src/components/icon-button';
import IconButtonImplement from '../../src/components/icon-button/implement';

describe('IconButton', () => {
	it('should render IconButton', () => {
		const wrapper = render(
			<div>
				<IconButton
					icon={'http://example.com'}
					className={'test1'}
				/>
				<IconButton
					icon={'data:image/png;base64,1234567890'}
					className={'test2'}
				/>
				<IconButton
					icon={'dashicons-menu'}
					className={'test3'}
				/>
			</div>,
		);

		expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot();

		expect(wrapper.find('button.has-icon')).toHaveLength(3);
		expect(wrapper.find('.test1')).toHaveLength(1);
		expect(wrapper.find('.test2')).toHaveLength(1);
		expect(wrapper.find('.test3')).toHaveLength(1);
	});
});

describe('IconButtonImplement', () => {
	it('should render IconButtonImplement', () => {
		const wrapper = render(
			<div>
				<IconButtonImplement
					icon={'http://example.com'}
					className={'test1'}
				/>
				<IconButtonImplement
					icon={'data:image/png;base64,1234567890'}
					className={'test2'}
				/>
				<IconButtonImplement
					icon={'dashicons-menu'}
					className={'test3'}
					tooltip={'tooltip '}
				/>
			</div>,
		);

		expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot();

		expect(wrapper.find('button.has-icon')).toHaveLength(3);
		expect(wrapper.find('button[aria-label]')).toHaveLength(1);
		expect(wrapper.find('.test1')).toHaveLength(1);
		expect(wrapper.find('.test2')).toHaveLength(1);
		expect(wrapper.find('.test3')).toHaveLength(1);
	});
});
