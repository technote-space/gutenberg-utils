/* eslint-disable no-magic-numbers */
import React from 'react';
import {render} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Icon as OriginalIcon} from '@wordpress/components';
import {Icon} from '../../src/components';

describe('Icon', () => {
  it('should render Icon', () => {
    const wrapper = render(
      <div>
        <Icon
          icon={'http://example.com'}
          className={'test1'}
        />
        <Icon
          icon={'data:image/png;base64,1234567890'}
          className={'test2'}
        />
        <Icon
          icon={'dashicons-menu'}
          className={'test3'}
        />
        <Icon
          icon={undefined}
          defaultIcon={'dashicons-admin-site'}
          className={'test4'}
        />
        <Icon
          icon={undefined}
          className={'test5'}
        />
        <Icon
          icon={<OriginalIcon
            icon={'admin-post'}
          />}
          className={'test6'}
        />
      </div>,
    );

    expect(toJson(wrapper, {mode: 'deep'})).toMatchSnapshot();

    expect(wrapper.find('svg')).toHaveLength(2);
    expect(wrapper.find('span')).toHaveLength(3);
    expect(wrapper.find('.test1')).toHaveLength(1);
    expect(wrapper.find('.test2')).toHaveLength(1);
    expect(wrapper.find('.test3')).toHaveLength(1);
    expect(wrapper.find('.test4')).toHaveLength(1);
    expect(wrapper.find('.test5')).toHaveLength(0);
    expect(wrapper.find('.test6')).toHaveLength(0);
    expect(wrapper.find('.dashicons-admin-post')).toHaveLength(1);
  });
});
