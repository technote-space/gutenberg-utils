/* eslint-disable no-magic-numbers */
import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import {SlotFillProvider} from '@wordpress/components';
import {DropdownButton} from '../../src/components';

jest.useFakeTimers();

describe('DropdownButton', () => {
  const getSnapshotName = (name, index) => `${name}--${index}`;

  [
    {
      props: {
        icon: 'dashicons-admin-site',
        label: 'test1-label',
        tooltip: 'test1-tooltip',
        className: 'test1-class',
        position: 'bottom left',
        contentClassName: 'test1-content-class',
        renderContent: () => <div className={'popover1'}>test1</div>,
        isActive: true,
        isDisabled: false,
        isHiddenIndicator: true,
      },
      callback: (wrapper, index) => {
        expect(wrapper.find('.test1-class').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test1-class button').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test1-class button').hostNodes().prop('disabled')).toBe(false);
        expect(wrapper.find('.test1-class button.is-active').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test1-class button .components-dropdown-button__indicator').hostNodes()).toHaveLength(0);
        expect(wrapper.find('.popover1').hostNodes()).toHaveLength(0);

        wrapper.find('.test1-class button').hostNodes().simulate('click');

        expect(toJson(wrapper, {mode: 'deep'})).toMatchSnapshot(getSnapshotName('open', index));

        expect(wrapper.find('.popover1').hostNodes()).toHaveLength(1);
      },
    },
    {
      props: {
        label: 'test2-label',
        className: 'test2-class',
        contentClassName: 'test2-content-class',
        renderContent: () => <div className={'popover2'}>test2</div>,
        isActive: true,
        isHiddenIndicator: true,
        isDropdownDisabled: true,
      },
      callback: (wrapper) => {
        expect(wrapper.find('.test2-class').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test2-class button').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test2-class button').hostNodes().prop('disabled')).toBe(false);
        expect(wrapper.find('.test2-class button.is-active').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test2-class button .components-dropdown-button__indicator').hostNodes()).toHaveLength(0);
        expect(wrapper.find('.popover2').hostNodes()).toHaveLength(0);

        wrapper.find('.test2-class button').hostNodes().simulate('click');
        expect(wrapper.find('.popover2').hostNodes()).toHaveLength(1);

        jest.advanceTimersByTime(1);
        wrapper.update();

        expect(wrapper.find('.popover2').hostNodes()).toHaveLength(0);
      },
    },
    {
      props: {
        label: 'test3-label',
        className: 'test3-class',
        contentClassName: 'test3-content-class',
        isDisabled: true,
        renderContent: () => <div className={'popover3'}>test3</div>,
      },
      callback: (wrapper) => {
        expect(wrapper.find('.test3-class').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test3-class button').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.test3-class button').hostNodes().prop('disabled')).toBe(true);
        expect(wrapper.find('.test3-class button.is-active').hostNodes()).toHaveLength(0);
        expect(wrapper.find('.test3-class button .components-dropdown-menu__indicator').hostNodes()).toHaveLength(1);
        expect(wrapper.find('.popover3').hostNodes()).toHaveLength(0);

        wrapper.find('.test3-class button').hostNodes().simulate('click');
        expect(wrapper.find('.popover3').hostNodes()).toHaveLength(0);
      },
    },
  ].forEach(({props, callback}, index) => {
    it(`should render DropdownButton ${index}`, () => {
      const wrapper = mount(
        <SlotFillProvider>
          <DropdownButton {...props} />
        </SlotFillProvider>,
      );

      expect(toJson(wrapper, {mode: 'deep'})).toMatchSnapshot(getSnapshotName('test', index));

      callback(wrapper, index);
    });
  });
});
